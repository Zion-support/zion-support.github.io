#!/usr/bin/env python3
"""
V40-A: billing_scope_enforcer — map 6 billing fields from 26-field IRS dcRecord
Target: 25/25 assertions via test_harness_v40a.py
"""
import json
from pathlib import Path

WORKSPACE = Path(__file__).resolve().parent.parent.parent
DATA = WORKSPACE / "data"
POLICY = DATA / "policies" / "billing_scope.json"

def load_policy() -> dict:
    if POLICY.exists():
        return json.loads(POLICY.read_text())
    return {"field_mappings": {}, "total_fields": 0, "billing_fields": 0}

def validate_dcrecord(dc_record: list) -> dict:
    """Validate 26-field IRS dcRecord and map billing fields."""
    policy = load_policy()
    mappings = policy.get("field_mappings", {})
    total = policy.get("total_fields", 26)
    result = {"valid": False, "billing_fields": {}, "errors": []}

    if not isinstance(dc_record, list):
        result["errors"].append("dcRecord must be a list")
        return result
    if len(dc_record) != total:
        result["errors"].append(f"Expected {total} fields, got {len(dc_record)}")
        return result

    for name, spec in mappings.items():
        idx = spec["idx"]
        expected_type = spec.get("type", "string")
        val = dc_record[idx] if idx < len(dc_record) else None
        if val is None and spec.get("required", False):
            result["errors"].append(f"Required field '{name}' missing")
            continue
        if expected_type == "number" and isinstance(val, str):
            try:
                val = float(val)
            except ValueError:
                result["errors"].append(f"Field '{name}' should be {expected_type}")
                continue
        result["billing_fields"][name] = val

    result["valid"] = len(result["errors"]) == 0
    return result

def get_billing_summary(dc_record: list) -> dict:
    """Return gross_receipts, deductions, net_income from dcRecord."""
    v = validate_dcrecord(dc_record)
    if not v["valid"]:
        return v
    bf = v["billing_fields"]
    return {
        "gross_receipts": bf.get("gross_receipts", 0),
        "deductions":      bf.get("deductions", 0),
        "net_income":      bf.get("net_income", 0)
    }

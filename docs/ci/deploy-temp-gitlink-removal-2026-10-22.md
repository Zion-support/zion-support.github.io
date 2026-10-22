# Phantom .deploy-temp gitlink removal — verification

Date: 2026-10-22
PR: #71627
Branch: fix/remove-deploy-temp-gitlink-20261021

## Change
- Removes the phantom `.deploy-temp` gitlink (mode 160000, commit 05aaa610) with no `.gitmodules` entry.
- This previously caused `actions/checkout` to fail with: `fatal: No url found for submodule path '.deploy-temp' in .gitmodules`.

## Verification required on exact head
- Confirm GitHub Actions checkout succeeds on this head.
- Confirm Workers Builds and review checks complete without the checkout failure.
- No other site files are changed by the gitlink removal itself.

Homepage: https://ziontechgroup.com/
Apps network: https://ziontechgroup.com/zion-app-network/

import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { TalentProfile } from "@/types/talent";

export interface ContractFormValues {
  projectTitle: string;
  description: string;
  deliverables: string;
  timeline: string;
  budget: number;
  paymentTerms: string;
  startDate: string;
  endDate: string;
}

interface ContractFormProps {
  talent: TalentProfile;
  clientName: string;
  initialValues?: ContractFormValues;
  onFormValuesChange: (values: ContractFormValues) => void;
  onContractGenerated: (contract: string) => void;
}

export function ContractForm({
  talent,
  clientName,
  initialValues,
  onFormValuesChange,
  onContractGenerated,
}: ContractFormProps) {
  const [formData, setFormData] = useState<ContractFormValues>(
    initialValues || {
      projectTitle: "",
      description: "",
      deliverables: "",
      timeline: "",
      budget: 0,
      paymentTerms: "",
      startDate: "",
      endDate: "",
    }
  );

  const handleInputChange = (field: keyof ContractFormValues, value: string | number) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    onFormValuesChange(newData);
  };

  const handleGenerateContract = () => {
    const contract = `
# Contract Agreement

**Project:** ${formData.projectTitle}
**Client:** ${clientName}
**Talent:** ${talent.name}

## Project Description
${formData.description}

## Deliverables
${formData.deliverables}

## Timeline
${formData.timeline}
Start Date: ${formData.startDate}
End Date: ${formData.endDate}

## Budget
$${formData.budget}

## Payment Terms
${formData.paymentTerms}

## Terms and Conditions
1. The talent will deliver the agreed-upon deliverables within the specified timeline.
2. Payment will be made according to the payment terms outlined above.
3. Any changes to the scope of work must be agreed upon in writing by both parties.
4. This contract is binding and enforceable by law.

**Client Signature:** _________________ Date: _________

**Talent Signature:** _________________ Date: _________
    `;
    
    onContractGenerated(contract);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="projectTitle">Project Title</Label>
          <Input
            id="projectTitle"
            value={formData.projectTitle}
            onChange={(e) => handleInputChange("projectTitle", e.target.value)}
            placeholder="Enter project title"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="budget">Budget ($)</Label>
          <Input
            id="budget"
            type="number"
            value={formData.budget}
            onChange={(e) => handleInputChange("budget", parseFloat(e.target.value) || 0)}
            placeholder="Enter budget"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Project Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          placeholder="Describe the project in detail"
          rows={4}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="deliverables">Deliverables</Label>
        <Textarea
          id="deliverables"
          value={formData.deliverables}
          onChange={(e) => handleInputChange("deliverables", e.target.value)}
          placeholder="List all deliverables"
          rows={3}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="startDate">Start Date</Label>
          <Input
            id="startDate"
            type="date"
            value={formData.startDate}
            onChange={(e) => handleInputChange("startDate", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="endDate">End Date</Label>
          <Input
            id="endDate"
            type="date"
            value={formData.endDate}
            onChange={(e) => handleInputChange("endDate", e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="timeline">Timeline</Label>
        <Input
          id="timeline"
          value={formData.timeline}
          onChange={(e) => handleInputChange("timeline", e.target.value)}
          placeholder="e.g., 2 weeks, 1 month"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="paymentTerms">Payment Terms</Label>
        <Textarea
          id="paymentTerms"
          value={formData.paymentTerms}
          onChange={(e) => handleInputChange("paymentTerms", e.target.value)}
          placeholder="e.g., 50% upfront, 50% on completion"
          rows={2}
        />
      </div>

      <Button onClick={handleGenerateContract} className="w-full">
        Generate Contract
      </Button>
    </div>
  );
}
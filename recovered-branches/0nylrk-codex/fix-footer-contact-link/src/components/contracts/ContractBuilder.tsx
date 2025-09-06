<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx


<<<<<<< HEAD
import { useState } from "react",
import { Dialog, DialogContent } from "@/components/ui/dialog",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { Button } from "@/components/ui/button",
import { Save } from "lucide-react",
import { TalentProfile } from "@/types/talent",
import { ContractForm, ContractFormValues } from "./components/ContractForm",
import { ContractPreview } from "./components/ContractPreview",

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface ContractBuilderProps {

  isOpen: boolean
  onClose: () => void
  talent: TalentProfile
  clientName: string

  onContractGenerated?: (contractContent: string) => void
<<<<<<< HEAD
}

export function ContractBuilder({
  isOpen,
  onClose,
  talent,
  clientName,
=======

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {useState} from "react";
import {Dialog, DialogContent} from "@/components/ui/dialog";
import {Tabs, TabsList, TabsTrigger, TabsContent} from "@/components/ui/tabs";
import {Button} from "@/components/ui/button";
import {Save} from "lucide-react";
import {TalentProfile} from "@/types/talent";
import {ContractForm, ContractFormValues} from "./components/ContractForm";
import {ContractPreview} from "./components/ContractPreview";
import {TemplateManager} from "./templates/TemplateManager";
import {SmartContractBuilder} from "./SmartContractBuilder";
<<<<<<< HEAD
interface ContractBuilderProps {;
  isOpen: boolean,;
  onClose: () => void,;
  talent: TalentProfile,;
  clientName: string,;
  onContractGenerated?: (contractContent: string) => void;
}
export function ContractBuilder(): any ({;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState } from "react",
import { Dialog, DialogContent } from "@/components/ui/dialog",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { Button } from "@/components/ui/button",
import { Save } from "lucide-react",
import { TalentProfile } from "@/types/talent",
import { ContractForm, ContractFormValues } from "./components/ContractForm",
import { ContractPreview } from "./components/ContractPreview",
<<<<<<< HEAD
import { TemplateManager } from "./templates/TemplateManager";
import { SmartContractBuilder } from "./SmartContractBuilder";
=======
import { TemplateManager } from "./templates/TemplateManager",
import { SmartContractBuilder } from "./SmartContractBuilder",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface ContractBuilderProps {

  isOpen: boolean
  onClose: () => void
  talent: TalentProfile
  clientName: string

  onContractGenerated?: (contractContent: string) => void
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
export function ContractBuilder({;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  isOpen;
  onClose;
  talent;
  clientName;
<<<<<<< HEAD
  onContractGenerated;
}: ContractBuilderProps) {;
  const [activeTab, setActiveTab] = useState<string>("form");
  const [generatedContract, setGeneratedContract] = useState<string | null>(null);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(;
    undefined;
  );
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false);
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false);
  const handleLoadTemplate = (templateData: ContractFormValues) => {;
    setFormValues(templateData);
  };
  const handleContractGenerated = (contract: string) => {;
    setGeneratedContract(contract);
=======

import { useState } from "react",;
import { Dialog, DialogContent } from "@/components/ui/dialog",;
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",;
import { Button } from "@/components/ui/button",;
import { Save } from "lucide-react",;
import { TalentProfile } from "@/types/talent",;
import { ContractForm, ContractFormValues } from "./components/ContractForm",;
import { ContractPreview } from "./components/ContractPreview",;
import { TemplateManager } from "./templates/TemplateManager",;
import { SmartContractBuilder } from "./SmartContractBuilder",;
;
interface ContractBuilderProps {;
  isOpen:boolean,;
  onClose:() => void,;
  talent:TalentProfile,;
  clientName:string,;
  onContractGenerated?:(contractContent:string) => void;
}
;
export function ContractBuilder({;
  isOpen,;
  onClose,;
  talent,;
  clientName,;
  onContractGenerated;
} ContractBuilderProps) {;
  const [activeTab, setActiveTab] = useState<string>("form"),;
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),;
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(;
    undefined;
  ),;
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false),;
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false),;
;
  const handleLoadTemplate = (templateData:ContractFormValues) => {;
    setFormValues(templateData);
  },;
;
  const handleContractGenerated = (contract:string) => {;
    setGeneratedContract(contract),;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    setActiveTab("preview"),;
    if (onContractGenerated) {;
      onContractGenerated(contract);
    }
<<<<<<< HEAD
  };
  if (showSmartContractBuilder) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx
    return (
      <SmartContractBuilder
        isOpen={isOpen}
        onClose={() => {;
          setShowSmartContractBuilder(false);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx

          onClose();

=======
========
          onClose();
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx
import { useState } from './react';
import { Dialog, DialogContent } from '@/components / ui / dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components / ui / tabs';
import { Button } from '@/components / ui / button';
import { Save } from './lucide-react';
import { TalentProfile } from '@/types / talent';
import { ContractForm, ContractFormValues } from './components / ContractForm';
import { ContractPreview } from './components / ContractPreview';
import { TemplateManager } from './templates / TemplateManager';
import { SmartContractBuilder } from './SmartContractBuilder';
interface ContractBuilderProps {
  is_open: boolean,
  on_close: () => void,
  talent: TalentProfile,
  client_name: string,
  onContractGenerated?: (contract_content: string) => void;
}
export /**
 * ContractBuilder - Function description
 */
function ContractBuilder() {
  const [active_tab, setActiveTab] = useState < string>("form");
  const [generated_contract, setGeneratedContract] = useState < string | null>(null);
  const [form_values, setFormValues] = useState < ContractFormValues | undefined>(
    undefined);
  const [templateManagerOpen, setTemplateManagerOpen] = useState (false);
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState (false);
;
  const handleLoadTemplate = (template_data: ContractFormValues) =>: any {
    setFormValues (template_data);
  }
;
  const handleContractGenerated = (contract: string) =>: any {
    setGeneratedContract (contract);
    setActiveTab ("preview"),
    // Check condition
if ( {) {
  $2
}
      onContractGenerated (contract);
    }
  }
;
  // Check condition
if ( {) {
  $2
}
    return (
      <SmartContractBuilder;
        is_open={is_open}
        on_close={() => {
          setShowSmartContractBuilder (false);
          on_close ();
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function ContractBuilder({
  isOpen,
  onClose,
  talent,
  clientName,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  onContractGenerated
}: ContractBuilderProps) {
  const [activeTab, setActiveTab] = useState<string>("form"),
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(
    undefined
  ),
<<<<<<< HEAD

<<<<<<< HEAD
import { useState } from "react",;
import { Dialog, DialogContent } from "@/components/ui/dialog",;
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",;
import { Button } from "@/components/ui/button",;
import { Save } from "lucide-react",;
import { TalentProfile } from "@/types/talent",;
import { ContractForm, ContractFormValues } from "./components/ContractForm",;
import { ContractPreview } from "./components/ContractPreview",;
import { TemplateManager } from "./templates/TemplateManager",;
import { SmartContractBuilder } from "./SmartContractBuilder",;
interface ContractBuilderProps {;
  isOpen: boolean,;
  onClose: () => void,;
  talent: TalentProfile,;
  clientName: string,;
  onContractGenerated?: (contractContent: string) => void;
}
;
export function ContractBuilder({;
  isOpen,;
  onClose,;
  talent,;
  clientName,;
  onContractGenerated;
}: ContractBuilderProps) {;
  const [activeTab, setActiveTab] = useState<string>("form"),;
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),;
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(;
    undefined;
  ),;
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false),;
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false),;
  const handleLoadTemplate = (templateData: ContractFormValues) => {;
    setFormValues(templateData);
  },;
  const handleContractGenerated = (contract: string) => {;
    setGeneratedContract(contract),;
    setActiveTab("preview"),;
    if (onContractGenerated) {;
      onContractGenerated(contract);
    }
  };
========
=======
  },;
;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx
  if (showSmartContractBuilder) {;
    return (;
      <SmartContractBuilder;
        isOpen={isOpen}
        onClose={() => {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx
          setShowSmartContractBuilder(false);
          onClose();

=======
<<<<<<< HEAD
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false);
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false);

  const handleLoadTemplate = (templateData: ContractFormValues) => {
    setFormValues(templateData)
  }
  const handleContractGenerated = (contract: string) => {
    setGeneratedContract(contract);
    setActiveTab("preview")
    if (onContractGenerated) {
      onContractGenerated(contract)
    }
  }
  if (showSmartContractBuilder) {
    return (
      <SmartContractBuilder
        isOpen={isOpen}
        onClose={() => {
          setShowSmartContractBuilder(false);

          onClose()
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false),
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false),

  const handleLoadTemplate = (templateData: ContractFormValues) => {
    setFormValues(templateData)
  },

  const handleContractGenerated = (contract: string) => {
    setGeneratedContract(contract),
    setActiveTab("preview"),
    if (onContractGenerated) {
      onContractGenerated(contract)
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
          setShowSmartContractBuilder(false),;
          onClose(),;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx
        }}
        talent={talent}
        client_name={client_name}
        onContractGenerated={onContractGenerated}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx

      />
    )
  }

<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (

========
<<<<<<< HEAD
=======
      />;
    ),;
  }
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">;
          <div className="flex justify-between items-center">;
            <TabsList className="grid grid-cols-2">;
              <TabsTrigger value="form">Contract Details</TabsTrigger>;
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview</TabsTrigger>;
            </TabsList>;
<<<<<<< HEAD
            <div className="flex gap-2">;
              <Button
                variant="outline" 
                size="sm"
=======
            ;
            <div className="flex gap-2">;
              <Button ;
                variant="outline" ;
                size="sm";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                onClick={() => setTemplateManagerOpen(true)}
                className="flex gap-1";
              >;
                <Save className="h-4 w-4" />;
                Templates;
              </Button>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx


========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    }
  };

  if (showSmartContractBuilder) {
    return (
      <SmartContractBuilder
        isOpen={isOpen}
        onClose={() => {
          setShowSmartContractBuilder(false);
          onClose()
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState } from "react",;
import { Dialog, DialogContent } from "@/components/ui/dialog",;
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",;
import { Button } from "@/components/ui/button",;
import { Save } from "lucide-react",;
import { TalentProfile } from "@/types/talent",;
import { ContractForm, ContractFormValues } from "./components/ContractForm",;
import { ContractPreview } from "./components/ContractPreview",;
import { TemplateManager } from "./templates/TemplateManager",;
import { SmartContractBuilder } from "./SmartContractBuilder",;
interface ContractBuilderProps {;
  isOpen: boolean,;
  onClose: () => void,;
  talent: TalentProfile,;
  clientName: string,;
  onContractGenerated?: (contractContent: string) => void;
}
;
export function ContractBuilder({;
  isOpen,;
  onClose,;
  talent,;
  clientName,;
  onContractGenerated;
}: ContractBuilderProps) {;
  const [activeTab, setActiveTab] = useState<string>("form"),;
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),;
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(;
    undefined;
  ),;
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false),;
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false),;
  const handleLoadTemplate = (templateData: ContractFormValues) => {;
    setFormValues(templateData);
  },;
  const handleContractGenerated = (contract: string) => {;
    setGeneratedContract(contract),;
    setActiveTab("preview"),;
    if (onContractGenerated) {;
      onContractGenerated(contract);
    }
  };
  if (showSmartContractBuilder) {;
    return (;
      <SmartContractBuilder;
        isOpen={isOpen}
        onClose={() => {;
          setShowSmartContractBuilder(false);
          onClose();
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        }}
        talent={talent}
        clientName={clientName}
        onContractGenerated={onContractGenerated}
      />
    )
  }
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
          <div className="flex justify-between items-center">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="form">Contract Details</TabsTrigger>
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview</TabsTrigger>
            </TabsList>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setTemplateManagerOpen(true)}
                className="flex gap-1"
              >
                <Save className="h-4 w-4" />
                Templates
              </Button>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setShowSmartContractBuilder(true)}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              >
                Smart Contract Builder
              </Button>
            </div>
          </div>
          <TabsContent value="form" className="pt-4">
<<<<<<< HEAD

=======

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx
      />);
  }
  return (
    <Dialog open={is_open} onOpenChange={on_close}>;
      <DialogContent className="max - w-4xl max - h-[90vh] overflow - y-auto">;
        <Tabs value={active_tab} onValueChange={setActiveTab} className="mt - 4">;
          <div className="flex justify - between items - center">;
            <TabsList className="grid grid - cols - 2">;
              <TabsTrigger value="form">Contract Details</TabsTrigger>;
              <TabsTrigger value="preview" disabled={!generated_contract}>Preview</TabsTrigger>;
            </TabsList>;
            <div className="flex gap - 2">;
              <Button;
                variant="outline";
                size="sm";
                on_click={() => setTemplateManagerOpen (true)}
                className="flex gap - 1";
              >;
                <Save className="h - 4 w - 4" />;
                Templates;
              </Button>;
              <Button;
                variant="secondary";
                size="sm";
                on_click={() => setShowSmartContractBuilder (true)}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx

========
=======
              ;
              <Button;
                variant="secondary";
                size="sm";
                onClick={() => setShowSmartContractBuilder(true)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx
              >;
                Smart Contract Builder;
              </Button>;
            </div>;
          </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx

          <TabsContent value="form" className="pt - 4">;
            <ContractForm;

=======

            <ContractForm 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
          <TabsContent value="form" className="pt - 4">;
            <ContractForm;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx
              talent={talent}
              client_name={client_name}
              initial_values={form_values}
=======
          ;
          <TabsContent value="form" className="pt-4">;
            <ContractForm ;
              talent={talent}              clientName={clientName}
              initialValues={formValues}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              onFormValuesChange={setFormValues}
              onContractGenerated={handleContractGenerated}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx
            />;
          </TabsContent>;
<<<<<<< HEAD
          <TabsContent value="preview" className="pt-4">;
            {generatedContract && (;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx
=======
<<<<<<< HEAD
            <ContractForm
=======
            <ContractForm 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              talent={talent}
              clientName={clientName}
              initialValues={formValues}
              onFormValuesChange={setFormValues}
              onContractGenerated={handleContractGenerated}
            />
          </TabsContent>
          <TabsContent value="preview" className="pt-4">
            {generatedContract && (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <ContractPreview
                contractContent={generatedContract}
                talent={talent}
                onClose={onClose}
                status="ready"
<<<<<<< HEAD
=======
          ;
          <TabsContent value="preview" className="pt-4">;
            {generatedContract && (;
              <ContractPreview ;
                contractContent={generatedContract}
                talent={talent}
                onClose={onClose}
                status="ready";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              />;
            )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx

          </TabsContent>;
        </Tabs>;


========
          </TabsContent>;
        </Tabs>;
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx
        <TemplateManager
=======
        ;
        <TemplateManager;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
              />
            )}
          </TabsContent>
        </Tabs>
        <TemplateManager
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          isOpen={templateManagerOpen}
          onClose={() => setTemplateManagerOpen(false)}
          onSelectTemplate={handleLoadTemplate}
          currentValues={formValues}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx
        />;
      </DialogContent>;
    </Dialog>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx
            />;
          </TabsContent>;
          <TabsContent value="preview" className="pt - 4">;
            {generated_contract && (
              <ContractPreview;
                contract_content={generated_contract}
                talent={talent}
                on_close={on_close}
                status="ready";
              />)}
          </TabsContent>;
        </Tabs>;
        <TemplateManager;
          is_open={templateManagerOpen}
          on_close={() => setTemplateManagerOpen (false)}
          onSelectTemplate={handleLoadTemplate}
          current_values={form_values}
        />;
      </DialogContent>;
    </Dialog>);
=======
  ),; interface ContractBuilderProps {
  isOpen: boolean;
onClose: () => void;
talent: TalentProfile;
clientName: string;
onContractGenerated?: (contractContent: string) => void 
}export function ContractBuilder ({
  isOpen;
onClose;
talent;
clientName;
onContractGenerated 
}: ContractBuilderProps) {
  const [formValues, setFormValues] = useState<ContractFormValues | undefined> (undefined);
const [templateManagerOpen, setTemplateManagerOpen] = useState (false);
const [showSmartContractBuilder, setShowSmartContractBuilder] = useState (false);
const handleLoadTemplate = (templateData: ContractFormValues) => {
  setFormValues (templateData) 
};
const handleContractGenerated = (contract: string) => {
  if (onContractGenerated) {
  onContractGenerated (contract) 
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx

=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
};
return (<SmartContractBuilder isOpen= {
  isOpen 
}/>) 
}</TabsList> <div className="flex gap-2" > <Button > <Save className="h-4 w-4" /> Templates </Button> <Button > Smart Contract Builder </Button> </div> </div> <TabsContent value="form" className="pt-4" > <ContractForm talent= {
  talent 
}clientName= {
  clientName 
}initialValues= {
  formValues 
}onFormValuesChange= {
  setFormValues 
}onContractGenerated= {
  handleContractGenerated 
}/> </TabsContent> />) 
}</TabsContent> </Tabs> <TemplateManager isOpen= {
  templateManagerOpen 
}onClose= {
  () => setTemplateManagerOpen (false) 
}onSelectTemplate= {
  handleLoadTemplate 
}currentValues= {
  formValues 
}/> </DialogContent> </Dialog>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/ContractBuilder.tsx
=======
<<<<<<< HEAD
        />
      </DialogContent>
    </Dialog>
  )
}
=======
        />;
      </DialogContent>;
    </Dialog>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

<<<<<<< HEAD
<<<<<<< HEAD

=======

import { useState } from "react",
import { Dialog, DialogContent } from "@/components/ui/dialog",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { Button } from "@/components/ui/button",
import { Save } from "lucide-react",
import { TalentProfile } from "@/types/talent",
import { ContractForm, ContractFormValues } from "./components/ContractForm",
import { ContractPreview } from "./components/ContractPreview",

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ContractBuilderProps {

  isOpen: boolean
  onClose: () => void
  talent: TalentProfile
  clientName: string

  onContractGenerated?: (contractContent: string) => void
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useState } from "react",
import { Dialog, DialogContent } from "@/components/ui/dialog",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { Button } from "@/components/ui/button",
import { Save } from "lucide-react",
import { TalentProfile } from "@/types/talent",
import { ContractForm, ContractFormValues } from "./components/ContractForm",
import { ContractPreview } from "./components/ContractPreview",
interface ContractBuilderProps {

  isOpen: boolean
  onClose: () => void
  talent: TalentProfile
  clientName: string

  onContractGenerated?: (contractContent: string) => void
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState } from "react",
import { Dialog, DialogContent } from "@/components/ui/dialog",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { Button } from "@/components/ui/button",
import { Save } from "lucide-react",
import { TalentProfile } from "@/types/talent",
import { ContractForm, ContractFormValues } from "./components/ContractForm",
import { ContractPreview } from "./components/ContractPreview",
interface ContractBuilderProps {

  isOpen: boolean
  onClose: () => void
  talent: TalentProfile
  clientName: string

  onContractGenerated?: (contractContent: string) => void
}
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ContractBuilderProps {

  isOpen: boolean
  onClose: () => void
  talent: TalentProfile
  clientName: string

  onContractGenerated?: (contractContent: string) => void
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
interface ContractBuilderProps {}
  isOpen: boolean;
  onClose: () => void;
  talent: TalentProfile;
  clientName: string;
  onContractGenerated?: (contractContent: string) => void;
import {useState} from "react";"
import {Dialog, DialogContent} from "@/components/ui/dialog";"
import {Tabs, TabsList, TabsTrigger, TabsContent} from "@/components/ui/tabs";"
import {Button} from "@/components/ui/button";"
import {Save} from "lucide-react";"
import {TalentProfile} from "@/types/talent";"
import {ContractForm, ContractFormValues} from "./components/ContractForm";"
import {ContractPreview} from "./components/ContractPreview";"
import {TemplateManager} from "./templates/TemplateManager";"
import {SmartContractBuilder} from "./SmartContractBuilder";

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

}
  isOpen: boolean;,
  onClose: () => void;
  talent: TalentProfile;,
  clientName: string;
  onContractGenerated?: (contractContent: string) => void;
import {useState} from "react";""
import {Dialog, DialogContent} from "@/components/ui/dialog";""
import {Tabs, TabsList, TabsTrigger, TabsContent} from "@/components/ui/tabs";""
import {Button} from "@/components/ui/button";""
import {Save} from "lucide-react";""
import {TalentProfile} from "@/types/talent";""
import {ContractForm, ContractFormValues} from "./components/ContractForm";""
import {ContractPreview} from "./components/ContractPreview";""
import {TemplateManager} from "./templates/TemplateManager";""
import {SmartContractBuilder} from "./SmartContractBuilder";"
pr-12325

  isOpen: boolean
  onClose: () => void
  talent: TalentProfile
  clientName: string

  onContractGenerated?: (contractContent: string) => void
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
interface ContractBuilderProps {;
  isOpen: boolean,;
  onClose: () => void,;
  talent: TalentProfile,;
  clientName: string,;}
  onContractGenerated?: (contractContent: string) => void;}
}
export function ContractBuilder(): any ({;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { useState } from "react",
import { Dialog, DialogContent } from "@/components/ui/dialog",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { Button } from "@/components/ui/button",
import { Save } from "lucide-react",
import { TalentProfile } from "@/types/talent",
import { ContractForm, ContractFormValues } from "./components/ContractForm",
import { ContractPreview } from "./components/ContractPreview",
import { TemplateManager } from "./templates/TemplateManager";
import { SmartContractBuilder } from "./SmartContractBuilder";
import { TemplateManager } from "./templates/TemplateManager",
import { SmartContractBuilder } from "./SmartContractBuilder",
interface ContractBuilderProps {
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
  onContractGenerated?: (contractContent: string) => void
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======

  isOpen: boolean
  onClose: () => void
  talent: TalentProfile
  clientName: string

  onContractGenerated?: (contractContent: string) => void
}

export function ContractBuilder({;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export function ContractBuilder({;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export function ContractBuilder({;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  isOpen;
  onClose;
  talent;
  clientName;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function ContractBuilder({
  isOpen,
  onClose,
  talent,
  clientName,
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  onContractGenerated;
}: ContractBuilderProps) {;
  const [activeTab, setActiveTab] = useState<string>("form");
  const [generatedContract, setGeneratedContract] = useState<string | null>(null);
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(;
    undefined;
  );
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false);
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false);

  const handleLoadTemplate = (templateData: ContractFormValues) => {;
    setFormValues(templateData);
=======
export function ContractBuilder() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  };

  const handleContractGenerated = (contract: string) => {;
    setGeneratedContract(contract);
"
    setActiveTab("preview"),;
    if (onContractGenerated) {;
      onContractGenerated(contract);
    }



    return (
      <SmartContractBuilder;
        isOpen={isOpen}
        onClose={() => {;
          setShowSmartContractBuilder(false);



import { useState } from './react';'
import { Dialog, DialogContent } from '@/components / ui / dialog';'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components / ui / tabs';'
import { Button } from '@/components / ui / button';'
import { Save } from './lucide-react';'
import { TalentProfile } from '@/types / talent';'
import { ContractForm, ContractFormValues } from './components / ContractForm';'
import { ContractPreview } from './components / ContractPreview';'
import { TemplateManager } from './templates / TemplateManager';'
import { SmartContractBuilder } from './SmartContractBuilder';
interface ContractBuilderProps {}
  is_open: boolean,
  on_close: () => void,
  talent: TalentProfile,
  client_name: string,
  onContractGenerated?: (contract_content: string) => void;
}
export /**;
 * ContractBuilder - Function description;
 */
function ContractBuilder() { return null; }
  const handleLoadTemplate = (template_data: ContractFormValues) =>: any {}
    setFormValues (template_data);
  }
;
  const handleContractGenerated = (contract: string) =>: any {}
    setGeneratedContract (contract);"
    setActiveTab ("preview"),
    // Check condition;
if ( {) {}
  $2;
}
      onContractGenerated (contract);
    }
  }
;
  // Check condition;
if ( {) {}
  $2;
}
    return (
      <SmartContractBuilder;
        is_open={is_open}
        on_close={() => {}
          setShowSmartContractBuilder (false);
          on_close ();



}


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
export function ContractBuilder({
  isOpen,
  onClose,
  talent,
  clientName,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
export function ContractBuilder({;export function ContractBuilder({;
=======
export function ContractBuilder({;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  isOpen;
  onClose;
  talent;
  clientName;
export function ContractBuilder({
  isOpen,
  onClose,
  talent,
  clientName,
  onContractGenerated;
}: ContractBuilderProps) {;
  const [activeTab, setActiveTab] = useState<string>("form");
  const [generatedContract, setGeneratedContract] = useState<string | null>(null);

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
    setActiveTab("preview"),;
    if (onContractGenerated) {;
      onContractGenerated(contract);
    }
  };

  if (showSmartContractBuilder) {;

    return (
      <SmartContractBuilder
        isOpen={isOpen}
        onClose={() => {;
          setShowSmartContractBuilder(false);

          onClose();

onClose();
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
}

export function ContractBuilder({
  isOpen,
  onClose,
  talent,
  clientName,
export function ContractBuilder({;export function ContractBuilder({;
  isOpen;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export function ContractBuilder({;export function ContractBuilder({;
  isOpen;
  onClose;
  talent;
  clientName;}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  onContractGenerated
}: ContractBuilderProps) {
=======



  onContractGenerated;
}: ContractBuilderProps) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const [activeTab, setActiveTab] = useState<string>("form"),
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(
<<<<<<< HEAD
    undefined;
  ),
<<<<<<< HEAD
<<<<<<< HEAD
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false);
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false);

<<<<<<< HEAD
=======
=======
=======
    undefined
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

          onClose()
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false);
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false);
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false),
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false),

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const handleLoadTemplate = (templateData: ContractFormValues) => {
    setFormValues(templateData)
  },

  const handleContractGenerated = (contract: string) => {
    setGeneratedContract(contract),
    setActiveTab("preview"),
    if (onContractGenerated) {
      onContractGenerated(contract)

setShowSmartContractBuilder(false),;
          onClose(),;
        }}
        talent={talent}
        client_name={client_name}
        onContractGenerated={onContractGenerated}

      />
    )
  }

  return (

/>;
    ),;
  }
;
  return (;
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">;
          <div className="flex justify-between items-center">;
            <TabsList className="grid grid-cols-2">;
              <TabsTrigger value="form">Contract Details</TabsTrigger>;
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview</TabsTrigger>;
            </TabsList>;

            <div className="flex gap-2">;
              <Button
                variant="outline" 
<<<<<<< HEAD
                size="sm"                onClick={() => setTemplateManagerOpen(true)}
=======


  const [templateManagerOpen, setTemplateManagerOpen] = useState(false);
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false);


  const [templateManagerOpen, setTemplateManagerOpen] = useState(false),
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false),

  const handleLoadTemplate = (templateData: ContractFormValues) => {}
    setFormValues(templateData)
  },

  const handleContractGenerated = (contract: string) => {}
    setGeneratedContract(contract),"
    setActiveTab("preview"),
    if (onContractGenerated) {}
      onContractGenerated(contract)

        }}
        talent={talent}
        client_name={client_name}
        onContractGenerated={onContractGenerated}




  return (


    <Dialog open={isOpen} onOpenChange={onClose}>;"
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;"
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">;"
          <div className="flex justify-between items-center">;"
            <TabsList className="grid grid-cols-2">;"
              <TabsTrigger value="form">Contract Details</TabsTrigger>;"
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview</TabsTrigger>;
            </TabsList>;

                onClick={() => setTemplateManagerOpen(true)}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                size="sm"
;
            <div className="flex gap-2">;
              <Button ;
                variant="outline" ;
                size="sm";
                onClick={() => setTemplateManagerOpen(true)}
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                size="sm"                onClick={() => setTemplateManagerOpen(true)}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                className="flex gap-1";
              >;"
                <Save className="h-4 w-4" />;
                Templates;
              </Button>;
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
    }
  };

=======
}
  };

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  if (showSmartContractBuilder) {
    return (
      <SmartContractBuilder
        isOpen={isOpen}
        onClose={() => {
          setShowSmartContractBuilder(false);
          onClose()
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { useState } from "react",;
import { Dialog, DialogContent } from "@/components/ui/dialog",;
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",;
import { Button } from "@/components/ui/button",;
import { Save } from "lucide-react",;
import { TalentProfile } from "@/types/talent",;
import { ContractForm, ContractFormValues } from "./components/ContractForm",;
import { ContractPreview } from "./components/ContractPreview",;
import { TemplateManager } from "./templates/TemplateManager",;
=======
"
import { useState } from "react",;"
import { Dialog, DialogContent } from "@/components/ui/dialog",;"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",;"
import { Button } from "@/components/ui/button",;"
import { Save } from "lucide-react",;"
import { TalentProfile } from "@/types/talent",;"
import { ContractForm, ContractFormValues } from "./components/ContractForm",;"
import { ContractPreview } from "./components/ContractPreview",;"
import { TemplateManager } from "./templates/TemplateManager",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { SmartContractBuilder } from "./SmartContractBuilder",;
interface ContractBuilderProps {;
  isOpen: boolean,;
  onClose: () => void,;
  talent: TalentProfile,;
  clientName: string,;
  onContractGenerated?: (contractContent: string) => void;
}
;
export function ContractBuilder() { return null; }
  },;
  const handleContractGenerated = (contract: string) => {;
    setGeneratedContract(contract),;"
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        }}
        talent={talent}
        client_name={client_name}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        onContractGenerated={onContractGenerated}

<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
            <ContractForm
            <ContractForm 
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
        onContractGenerated={onContractGenerated}
      />
    )
  }

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
                size="sm"
                onClick={() => setTemplateManagerOpen(true)}
                className="flex gap-1"
              >
                <Save className="h-4 w-4" />
                Templates
              </Button>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <Button
                variant="secondary"
=======
              <Button"
                variant="secondary""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                size="sm"
                onClick={() => setShowSmartContractBuilder(true)}

      />);
  }
  return (
    <Dialog open={is_open} onOpenChange={on_close}>;"
      <DialogContent className="max - w-4xl max - h-[90vh] overflow - y-auto">;"
        <Tabs value={active_tab} onValueChange={setActiveTab} className="mt - 4">;"
          <div className="flex justify - between items - center">;"
            <TabsList className="grid grid - cols - 2">;"
              <TabsTrigger value="form">Contract Details</TabsTrigger>;"
              <TabsTrigger value="preview" disabled={!generated_contract}>Preview</TabsTrigger>;
            </TabsList>;"
            <div className="flex gap - 2">;
              <Button;"
                variant="outline";"
                size="sm";
                on_click={() => setTemplateManagerOpen (true)}"
                className="flex gap - 1";
              >;"
                <Save className="h - 4 w - 4" />;
                Templates;
              </Button>;
              <Button;"
                variant="secondary";"
                size="sm";
                on_click={() => setShowSmartContractBuilder (true)}

              >;
                Smart Contract Builder;
              </Button>;
            </div>;
          </div>;



<<<<<<< HEAD
            <ContractForm 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              talent={talent}
=======
        onContractGenerated={onContractGenerated}                variant="secondary"
                size="sm"
                onClick={() => setShowSmartContractBuilder(true)}              talent={talent}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        onContractGenerated={onContractGenerated}                variant="secondary"
                size="sm"
                onClick={() => setShowSmartContractBuilder(true)}              talent={talent}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
        onContractGenerated={onContractGenerated}                variant="secondary"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                size="sm"
                onClick={() => setShowSmartContractBuilder(true)}              talent={talent}

export function ContractBuilder(): any ({;

export function ContractBuilder({;
  isOpen;
  onClose;
  talent;
  clientName;
  onContractGenerated;)
}: ContractBuilderProps) {;"
  const [activeTab, setActiveTab] = useState<string>("form");"
</string>
  const [generatedContract, setGeneratedContract] = useState<string | null>(null);

  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(;

      <SmartContractBuilder;
        isOpen={isOpen})
        onClose={() => {;
"
  const [active_tab, setActiveTab] = useState < string>("form");"
  const [generated_contract, setGeneratedContract] = useState < string | null>(null);
  const [form_values, setFormValues] = useState < ContractFormValues | undefined>()
    undefined);
  const [templateManagerOpen, setTemplateManagerOpen] = useState (false);
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState (false);
;
  const handleLoadTemplate = (template_data: ContractFormValues) =>: any {
  // TODO: Implement
    setFormValues (template_data);
  const handleContractGenerated = (contract: string) =>: any {
  // TODO: Implement
    setGeneratedContract (contract);"
    setActiveTab ("preview"),"
    // Check condition;
if ( {) {
  $2;
      onContractGenerated (contract);
  // Check condition;
    return (
        is_open={is_open})
        on_close={() => {
  const [activeTab, setActiveTab] = useState<string>("form"),"
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(

    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;"
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">;"
          <div className="flex justify-between items-center">;"
</div>"
            <TabsList className="grid grid-cols-2">;"
              <TabsTrigger value="form">Contract Details;""
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview;"
            ;"
            <div className="flex gap-2">;"
</div>
              <Button;"
                variant="outline"""
                size="sm"")
                onClick={() => setTemplateManagerOpen(true)}
                className="flex gap-1"
              >
                <Save className="h-4 w-4" />
                Templates
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setShowSmartContractBuilder(true)}

>
                Smart Contract Builder
              </Button>
            </div>
          </div>
          <TabsContent value="form" className="pt-4">
      />);
  }
  return (
                <Save className="h-4 w-4" />;"

  const [activeTab, setActiveTab] = useState<string>("form"),;"
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),;


    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">"
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">"
          <div className="flex justify-between items-center">"
            <TabsList className="grid grid-cols-2">"
              <TabsTrigger value="form">Contract Details""
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview"
            <div className="flex gap-2">"
                size="sm""
                <Save className="h-4 w-4" />"

                variant="secondary"""
                onClick={() => setShowSmartContractBuilder(true)}

    <Dialog open={is_open} onOpenChange={on_close}>;
      <DialogContent className="max - w-4xl max - h-[90vh] overflow - y-auto">;"
        <Tabs value={active_tab} onValueChange={setActiveTab} className="mt - 4">;"
          <div className="flex justify - between items - center">;"
            <TabsList className="grid grid - cols - 2">;"
              <TabsTrigger value="preview" disabled={!generated_contract}>Preview;"
            <div className="flex gap - 2">;"
                variant="outline";""
                size="sm";"
                on_click={() => setTemplateManagerOpen (true)}
                <Save className="h - 4 w - 4" />;"

                variant="secondary";""
                on_click={() => setShowSmartContractBuilder (true)}

;
              <Button;
                variant="secondary";
                size="sm";
                onClick={() => setShowSmartContractBuilder(true)}
              >;
                Smart Contract Builder;
              </Button>;
            </div>;
          </div>;
            </div>;
          </div>;"
          <TabsContent value="form" className="pt - 4">;"

            <ContractForm;

<ContractForm
              talent={talent}
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12325

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              client_name={client_name}
              initial_values={form_values}
              onFormValuesChange={setFormValues}
              onContractGenerated={handleContractGenerated}


<<<<<<< HEAD
          <TabsContent value="preview" className="pt-4">;
<<<<<<< HEAD
            {generatedContract && (;        <TemplateManager
=======

              <ContractPreview;
                contractContent={generatedContract}
                talent={talent}
                onClose={onClose}"
                status="ready"



        <TemplateManager;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            {generatedContract && (;

<ContractForm 

          ;
          <TabsContent value="form" className="pt-4">;
            <ContractForm ;
              talent={talent}              clientName={clientName}
              initialValues={formValues}
              onFormValuesChange={setFormValues}
              onContractGenerated={handleContractGenerated}
            />;
          </TabsContent>;
            <ContractForm
            <ContractForm 
              talent={talent}
              clientName={clientName}
              initialValues={formValues}
              onFormValuesChange={setFormValues}
              onContractGenerated={handleContractGenerated}
            />
          </TabsContent>
          <TabsContent value="preview" className="pt-4">
            {generatedContract && (
              <ContractPreview
                contractContent={generatedContract}
                talent={talent}
                onClose={onClose}
                status="ready"
              />;
            )}

          </TabsContent>;
        </Tabs>;

;
          <TabsContent value="preview" className="pt-4">;
            {generatedContract && (;
              <ContractPreview ;
                contractContent={generatedContract}
                talent={talent}
                onClose={onClose}
                status="ready";
              />;
            )}
          </TabsContent>;
        </Tabs>;
        ;
        <TemplateManager;
              />
            )}
          </TabsContent>
        </Tabs>
        <TemplateManager
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
            {generatedContract && (;        <TemplateManager
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          isOpen={templateManagerOpen}
          onClose={() => setTemplateManagerOpen(false)}
          onSelectTemplate={handleLoadTemplate}
          currentValues={formValues}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        />
      </DialogContent>
    </Dialog>
  )
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        />;
      </DialogContent>;
    </Dialog>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


            />;
          </TabsContent>;"
=======
}

/>;
      </DialogContent>;
    </Dialog>;
            />;
          </TabsContent>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <TabsContent value="preview" className="pt - 4">;
            {generated_contract && (
              <ContractPreview;
                contract_content={generated_contract}
                talent={talent}
<<<<<<< HEAD
                on_close={on_close}"
=======
                on_close={on_close}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  ),; interface ContractBuilderProps {
=======
}  ),; interface ContractBuilderProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}  ),; interface ContractBuilderProps {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



  ),; interface ContractBuilderProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}

;
  ),; interface ContractBuilderProps {
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}  ),; interface ContractBuilderProps {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  isOpen: boolean;
onClose: () => void;
talent: TalentProfile;
clientName: string;
onContractGenerated?: (contractContent: string) => void;
}export function ContractBuilder ({};
  isOpen;
onClose;
talent;
clientName;
onContractGenerated;
}: ContractBuilderProps) {}
  const [formValues, setFormValues] = useState<ContractFormValues | undefined> (undefined);
const [templateManagerOpen, setTemplateManagerOpen] = useState (false);
const [showSmartContractBuilder, setShowSmartContractBuilder] = useState (false);
const handleLoadTemplate = (templateData: ContractFormValues) => {}
  setFormValues (templateData) 
};
const handleContractGenerated = (contract: string) => {}
  if (onContractGenerated) {}
  onContractGenerated (contract) 
}
;

<<<<<<< HEAD
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
}
        />
      </DialogContent>
    </Dialog>
  )
}
        />;
      </DialogContent>;
    </Dialog>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


</ContractForm>
          </TabsContent>;"
          <TabsContent value="preview" className="pt-4">;"

              <ContractPreview;
                contractContent={generatedContract}
                onClose={onClose}"
                status="ready""

        <TemplateManager;
          isOpen={templateManagerOpen}
          onClose={() => setTemplateManagerOpen(false)}

          <TabsContent value="preview" className="pt - 4">;"

                contract_content={generated_contract}
                on_close={on_close}"
                status="ready";"
              />)}

          is_open={templateManagerOpen}
          on_close={() => setTemplateManagerOpen (false)}

    );
  const [formValues, setFormValues] = useState<ContractFormValues | undefined> (undefined);

return (<SmartContractBuilder isOpen= {
  isOpen;)
}/>) 
} <div className="flex gap-2" > <Button > <Save className="h-4 w-4" /> Templates  <Button > Smart Contract Builder  </div> </div> <TabsContent value="form" className="pt-4" > <ContractForm talent= {"
}clientName= {
}initialValues= {
  formValues;
}onFormValuesChange= {
  setFormValues;
}onContractGenerated= {
  handleContractGenerated;
}/>  />) 
}  <TemplateManager isOpen= {
  templateManagerOpen;
}onClose= {
  () => setTemplateManagerOpen (false) 

}/>  ) 
pr-12325
</TemplateManager>

}/> </DialogContent> </Dialog>) 
      </DialogContent>
    </Dialog>
      </DialogContent>;
    </Dialog>;
  );
}
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

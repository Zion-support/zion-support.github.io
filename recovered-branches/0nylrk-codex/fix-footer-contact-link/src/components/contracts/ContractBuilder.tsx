
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface ContractBuilderProps {

  isOpen: boolean
  onClose: () => void
  talent: TalentProfile
  clientName: string

  onContractGenerated?: (contractContent: string) => void
}

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
}
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


interface ContractBuilderProps {;
  }
  "isOpen": boolean,;
  "onClose": () => void,;
  "talent": TalentProfile,;
  "clientName": string,;
  onContractGenerated?: ("contractContent": string) => void;
}
export function ContractBuilder(): any ({;
}
export function ContractBuilder() {
  }
  const [activeTab, setActiveTab] = useState<string>("form"),"
const [generatedContract, setGeneratedContract] = useState<string | null>(null),;
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

export function ContractBuilder({;

>>>>>>> origin/cursor/delete-old-data-records-6bba

  isOpen;
  onClose;
  talent;
  clientName;

<<<<<<< HEAD
=======
  onContractGenerated;
}: ContractBuilderProps) {;
  const [activeTab, setActiveTab] = useState<string>("form");
  const [generatedContract, setGeneratedContract] = useState<string | null>(null);
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(;
    undefined;
  );
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false);
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false);
<<<<<<< HEAD
  const handleLoadTemplate = (templateData: ContractFormValues) => {;
    setFormValues(templateData);
  };
  const handleContractGenerated = (contract: string) => {;
    setGeneratedContract(contract);



=======

  const handleLoadTemplate = (templateData: ContractFormValues) => {;
    setFormValues(templateData);
  };

  const handleContractGenerated = (contract: string) => {;
    setGeneratedContract(contract);
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


=======

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

  onContractGenerated
}: ContractBuilderProps) {

  const [activeTab, setActiveTab] = useState<string>("form"),
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(

          onClose()
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false);
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false);
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

setShowSmartContractBuilder(false),;
          onClose(),;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        }}
        talent={talent}
        client_name={client_name}
        onContractGenerated={onContractGenerated}

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      />
    )
  }

<<<<<<< HEAD

=======
  return (

/>;
    ),;
  }
;
  return (;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======
            <div className="flex gap-2">;
              <Button
                variant="outline" 

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
export function ContractBuilder() { return null; }
  },;
  const handleContractGenerated = (contract: string) => {;
    setGeneratedContract(contract),;"
    setActiveTab("preview"),;
    if (onContractGenerated) {;
      onContractGenerated(contract);
    }

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

export function ContractBuilder({
  isOpen,
  onClose,
  talent,
  clientName,
  onContractGenerated
}: ContractBuilderProps) {

  const [activeTab, setActiveTab] = useState<string>("form"),
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(

    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">;
          <div className="flex justify-between items-center">;
            <TabsList className="grid grid-cols-2">;
              <TabsTrigger value="form">Contract Details</TabsTrigger>;
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview</TabsTrigger>;
            </TabsList>;
            ;
            <div className="flex gap-2">;
              <Button ;
                variant="outline" ;
                size="sm";
                onClick={() => setTemplateManagerOpen(true)}
                className="flex gap-1";
              >;
                <Save className="h-4 w-4" />;
                Templates;
              </Button>;
    }
  };

  if (showSmartContractBuilder) {
    return (
      <SmartContractBuilder
        isOpen={isOpen}
        onClose={() => {
          setShowSmartContractBuilder(false);
          onClose()
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

        }}
        talent={talent}
        clientName={clientName}
        onContractGenerated={onContractGenerated}
      />
    )
  }

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

        }}
        talent={talent}
        client_name={client_name}

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

>>>>>>> origin/cursor/delete-old-data-records-6bba
              <Button
                variant="secondary"

                size="sm"
                onClick={() => setShowSmartContractBuilder(true)}

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

          ;
          <TabsContent value="form" className="pt-4">;
            <ContractForm ;
              talent={talent}              clientName={clientName}
              initialValues={formValues}
              onFormValuesChange={setFormValues}
              onContractGenerated={handleContractGenerated}
            />;
          </TabsContent>;

=======

              talent={talent}

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
            <TabsList className="grid grid-cols-2">;"
              <TabsTrigger value="form">Contract Details</TabsTrigger>;"
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview</TabsTrigger>;"
            </TabsList>;
            <div className="flex gap-2">;"
              <Button,
variant="outline";"
                size="sm"                onClick={() => setTemplateManagerOpen(true)}"
                className="flex gap-1";"
              >;
                <Save className="h-4 w-4" />;"
                Templates;
              </Button>;
import { useState } from "react";"
import { Dialog, DialogContent } from "@/components/ui/dialog";"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",;"
import { Button } from "@/components/ui/button",;"
import { Save } from "lucide-react",;"
import { TalentProfile } from "@/types/talent",;"
import { ContractForm, ContractFormValues } from "./components/ContractForm",;"
import { ContractPreview } from "./components/ContractPreview",;"
import { TemplateManager } from "./templates/TemplateManager",;"
import { SmartContractBuilder } from "./SmartContractBuilder",;"
interface ContractBuilderProps {;
  }
  "isOpen": boolean,;
  "onClose": () => void,;
  "talent": TalentProfile,;
  "clientName": string,;
  onContractGenerated?: ("contractContent": string) => void;
}
;
export function ContractBuilder() {;
  }
  const [activeTab, setActiveTab] = useState<string>("form"),;"
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),;
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(;
    undefined;
  ),;
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false),;
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false),;
  const handleLoadTemplate = ("templateData": ContractFormValues) => {;
    }
    setFormValues(templateData);
  },;
  const handleContractGenerated = ("contract": string) => {;
    }
    setGeneratedContract(contract),;
    setActiveTab("preview"),;"
    if (onContractGenerated) {;
      }
      onContractGenerated(contract);
    }
  };
  if (showSmartContractBuilder) {;
    }
    return (;
      <SmartContractBuilder;
        isOpen={isOpen}
        onClose={() => {;
          }
          setShowSmartContractBuilder(false);
          onClose();
        }
        talent={talent}
        client_name={client_name}
        onContractGenerated={onContractGenerated}                variant="secondary""
                size="sm""
                onClick={() => setShowSmartContractBuilder(true)}              talent={talent}
              client_name={client_name}
              initial_values={form_values}
              onFormValuesChange={setFormValues}
              onContractGenerated={handleContractGenerated}

            />;
          </TabsContent>;
          <TabsContent value="preview" className="pt-4">;"
            {generatedContract && (;        <TemplateManager
}
isOpen={templateManagerOpen}
          onClose={() => setTemplateManagerOpen(false)}
          onSelectTemplate={handleLoadTemplate}
          currentValues={formValues}
}  ),; interface ContractBuilderProps {
  }
  "isOpen": boolean;
"onClose": () => void;
"talent": TalentProfile;
"clientName": string;
onContractGenerated?: ("contractContent": string) => void
}export function ContractBuilder() {
  }
  const [formValues, setFormValues] = useState<ContractFormValues | undefined> (undefined);
const [templateManagerOpen, setTemplateManagerOpen] = useState (false);
const [showSmartContractBuilder, setShowSmartContractBuilder] = useState (false);
const handleContractGenerated = ("contract": string) => {
  }
  if (onContractGenerated) {
  }
  onContractGenerated (contract)
}

};
return (<SmartContractBuilder isOpen= {
  }
  isOpen
} />)
}</TabsList> <div className="flex gap-2" > <Button > <Save className="h-4 w-4" /> Templates </Button> <Button > Smart Contract Builder </Button> </div> </div> <TabsContent value="form" className="pt-4" > <ContractForm talent= {"
  }
  talent
}clientName= {
  }
  clientName
}initialValues= {
  }
  formValues
}onFormValuesChange= {
  }
  setFormValues
}onContractGenerated= {
  }
  handleContractGenerated
} /> </TabsContent> />)
}</TabsContent> </Tabs> <TemplateManager isOpen= {
  }
  templateManagerOpen
}onClose= {
  () => setTemplateManagerOpen (false)
}onSelectTemplate= {
  }
  handleLoadTemplate
}currentValues= {
  }
  formValues
}/> </DialogContent> </Dialog>)
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
        />
      </DialogContent>
    </Dialog>
  )
}
<<<<<<< HEAD


=======
        />;
      </DialogContent>;
    </Dialog>;
  );

>>>>>>> origin/cursor/delete-old-data-records-6bba
            />;
          </TabsContent>;"

          <TabsContent value="preview" className="pt - 4">;
            {generated_contract && (
              <ContractPreview;
                contract_content={generated_contract}
                talent={talent}

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
;




=======


  ),; interface ContractBuilderProps {
>>>>>>> origin/cursor/delete-old-data-records-6bba

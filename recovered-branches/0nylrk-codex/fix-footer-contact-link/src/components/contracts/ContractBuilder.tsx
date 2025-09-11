
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface ContractBuilderProps {

  isOpen: boolean
  onClose: () => void
  talent: TalentProfile
  clientName: string

  onContractGenerated?: (contractContent: string) => void

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { TemplateManager } from "./templates/TemplateManager",
import { SmartContractBuilder } from "./SmartContractBuilder",
interface ContractBuilderProps {

  isOpen: boolean
  onClose: () => void
  talent: TalentProfile
  clientName: string

  onContractGenerated?: (contractContent: string) => void
}
<<<<<<< HEAD

export function ContractBuilder({;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
interface ContractBuilderProps {;
  isOpen: boolean,;
  onClose: () => void,;
  talent: TalentProfile,;
  clientName: string,;
  onContractGenerated?: (contractContent: string) => void;
}

export function ContractBuilder(): any ({;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export function ContractBuilder({;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  isOpen;
  onClose;
  talent;
  clientName;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  onContractGenerated;
}: ContractBuilderProps) {;
  const [activeTab, setActiveTab] = useState<string>("form");
  const [generatedContract, setGeneratedContract] = useState<string | null>(null);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

  const handleLoadTemplate = (templateData: ContractFormValues) => {;
    setFormValues(templateData);
  };

  const handleContractGenerated = (contract: string) => {;
    setGeneratedContract(contract);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setActiveTab("preview"),;
    if (onContractGenerated) {;
      onContractGenerated(contract);
    }
<<<<<<< HEAD
=======
  };

  if (showSmartContractBuilder) {;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return (
      <SmartContractBuilder
        isOpen={isOpen}
        onClose={() => {;
          setShowSmartContractBuilder(false);
<<<<<<< HEAD
          onClose();
=======

          onClose();

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}



<<<<<<< HEAD
<<<<<<< HEAD
export function ContractBuilder({
  isOpen,
  onClose,
  talent,
  clientName,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  onContractGenerated
}: ContractBuilderProps) {
  const [activeTab, setActiveTab] = useState<string>("form"),
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(
    undefined
  ),
<<<<<<< HEAD
<<<<<<< HEAD
  },;
;
  if (showSmartContractBuilder) {;
    return (;
      <SmartContractBuilder;
        isOpen={isOpen}
        onClose={() => {;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
          setShowSmartContractBuilder(false),;
          onClose(),;
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        }}
        talent={talent}
        client_name={client_name}
        onContractGenerated={onContractGenerated}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      />
    )
  }

<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  return (

<<<<<<< HEAD
      />;
    ),;
  }
;
  return (;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  return (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">;
          <div className="flex justify-between items-center">;
            <TabsList className="grid grid-cols-2">;
              <TabsTrigger value="form">Contract Details</TabsTrigger>;
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview</TabsTrigger>;
            </TabsList>;
<<<<<<< HEAD
<<<<<<< HEAD
            ;
            <div className="flex gap-2">;
              <Button ;
                variant="outline" ;
                size="sm";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <div className="flex gap-2">;
              <Button
                variant="outline" 
                size="sm"
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                onClick={() => setTemplateManagerOpen(true)}
                className="flex gap-1";
              >;
                <Save className="h-4 w-4" />;
                Templates;
              </Button>;
<<<<<<< HEAD
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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setShowSmartContractBuilder(true)}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >
                Smart Contract Builder
              </Button>
            </div>
          </div>
          <TabsContent value="form" className="pt-4">
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
<<<<<<< HEAD
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
=======
=======
            <ContractForm
            <ContractForm 
              talent={talent}
              client_name={client_name}
              initial_values={form_values}
              onFormValuesChange={setFormValues}
              onContractGenerated={handleContractGenerated}

            />;
          </TabsContent>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          <TabsContent value="preview" className="pt-4">;
            {generatedContract && (;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <ContractPreview
                contractContent={generatedContract}
                talent={talent}
                onClose={onClose}
                status="ready"
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              />;
            )}

          </TabsContent>;
        </Tabs>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <TemplateManager
          isOpen={templateManagerOpen}
          onClose={() => setTemplateManagerOpen(false)}
          onSelectTemplate={handleLoadTemplate}
          currentValues={formValues}
<<<<<<< HEAD
<<<<<<< HEAD
        />;
      </DialogContent>;
    </Dialog>;
=======

=======
        />
      </DialogContent>
    </Dialog>
  )
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />;
      </DialogContent>;
    </Dialog>;
  );
}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}

=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

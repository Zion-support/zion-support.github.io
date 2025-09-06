

interface ContractBuilderProps {

  isOpen: boolean
  onClose: () => void
  talent: TalentProfile
  clientName: string

  onContractGenerated?: (contractContent: string) => void

<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
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

  isOpen: boolean
  onClose: () => void
  talent: TalentProfile
  clientName: string

  onContractGenerated?: (contractContent: string) => void
}

export function ContractBuilder({;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  isOpen;
  onClose;
  talent;
  clientName;
<<<<<<< HEAD
  onContractGenerated;
}: ContractBuilderProps) {;
  const [activeTab, setActiveTab] = useState<string>("form");
  const [generatedContract, setGeneratedContract] = useState<string | null>(null);

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    setActiveTab("preview"),;
    if (onContractGenerated) {;
      onContractGenerated(contract);
    }
<<<<<<< HEAD
  };

  if (showSmartContractBuilder) {;

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    return (
      <SmartContractBuilder
        isOpen={isOpen}
        onClose={() => {;
          setShowSmartContractBuilder(false);
<<<<<<< HEAD

          onClose();

=======
=======
          onClose();
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}



<<<<<<< HEAD
=======
export function ContractBuilder({
  isOpen,
  onClose,
  talent,
  clientName,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  onContractGenerated
}: ContractBuilderProps) {
  const [activeTab, setActiveTab] = useState<string>("form"),
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(
    undefined
  ),
<<<<<<< HEAD

=======
  },;
;
  if (showSmartContractBuilder) {;
    return (;
      <SmartContractBuilder;
        isOpen={isOpen}
        onClose={() => {;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
          setShowSmartContractBuilder(false),;
          onClose(),;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        }}
        talent={talent}
        client_name={client_name}
        onContractGenerated={onContractGenerated}

<<<<<<< HEAD
      />
    )
  }


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


  return (

<<<<<<< HEAD
=======
      />;
    ),;
  }
;
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                onClick={() => setTemplateManagerOpen(true)}
                className="flex gap-1";
              >;
                <Save className="h-4 w-4" />;
                Templates;
              </Button>;
<<<<<<< HEAD


=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setShowSmartContractBuilder(true)}
<<<<<<< HEAD

=======
=======
              >
                Smart Contract Builder
              </Button>
            </div>
          </div>
          <TabsContent value="form" className="pt-4">

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
              ;
              <Button;
                variant="secondary";
                size="sm";
                onClick={() => setShowSmartContractBuilder(true)}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              >;
                Smart Contract Builder;
              </Button>;
            </div>;
          </div>;
<<<<<<< HEAD

          <TabsContent value="form" className="pt - 4">;
            <ContractForm;

=======

            <ContractForm 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              talent={talent}
              client_name={client_name}
              initial_values={form_values}
              onFormValuesChange={setFormValues}
              onContractGenerated={handleContractGenerated}

            />;
          </TabsContent>;

          <TabsContent value="preview" className="pt-4">;
            {generatedContract && (;

=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <ContractPreview
                contractContent={generatedContract}
                talent={talent}
                onClose={onClose}
                status="ready"
<<<<<<< HEAD
              />;
            )}

          </TabsContent>;
        </Tabs>;


=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <TemplateManager
          isOpen={templateManagerOpen}
          onClose={() => setTemplateManagerOpen(false)}
          onSelectTemplate={handleLoadTemplate}
          currentValues={formValues}
<<<<<<< HEAD

        />;
      </DialogContent>;
    </Dialog>;
  );
}

=======
        />;
      </DialogContent>;
    </Dialog>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
}

=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
;

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

<<<<<<< HEAD


<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { useState  } from 'react';
import { SmartContractBuilder  } from '@/components/contracts/SmartContractBuilder';
import { ContractBuilder  } from '@/components/contracts/ContractBuilder';
import { ContractHeader  } from './ContractHeader';
import { ContractTypeCards  } from './ContractTypeCards';
import { RecentContractsTable  } from './RecentContractsTable';
import { TalentProfile  } from '@/types/talent';
import { useAuth } from '@/hooks/useAuth';
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {useState} from 'react';
import {SmartContractBuilder} from '@/components/contracts/SmartContractBuilder';
import {ContractBuilder} from '@/components/contracts/ContractBuilder';
import {ContractHeader} from './ContractHeader';
import {ContractTypeCards} from './ContractTypeCards';
import {RecentContractsTable} from './RecentContractsTable';
import {TalentProfile} from '@/types/talent';
import {useAuth} from '@/hooks/useAuth';
<<<<<<< HEAD
<<<<<<< HEAD

// Mock data for demo purposes


export function ContractBuilderContent() {;


=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
// Mock data for demo purposes

const mockTalent: TalentProfile = {
  id: 'talent-123'
  user_id: 'user-abc-123'
  full_name: 'Alex Chen'
  professional_title: 'Full Stack Developer'
  hourly_rate: 85
  profile_picture_url: ''
  skills: ['ReactNode.jsSmart Contracts']}
export function ContractBuilderContent() {
export function ContractBuilderContent() {;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

// Mock data for demo purposes


export function ContractBuilderContent() {;


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const { user } = useAuth();
  const [showBuilderType, setShowBuilderType] = useState<'none' | 'standard' | 'smart'>('none');
  const [recentContracts, setRecentContracts] = useState([
    {
      id: 'contract-1'
      title: 'Website Redesign'
      client: 'Acme Corp'
      talent: 'Alex Chen'
      date: '2025-05-15'
      isSmartContract: true
    }
    {
      id: 'contract-2'
      title: 'Mobile App Development'
      client: 'TechStart Inc'
      talent: 'Sarah Williams'
      date: '2025-05-10'
      isSmartContract: false
    }
  ]);
<<<<<<< HEAD


<<<<<<< HEAD

=======
=======
  const handleContractGenerated = (content: string) => {
    console.log('Contract generated:', content.substring(0, 100) + '...')
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { useState } from 'react',;
import { SmartContractBuilder } from '@/components/contracts/SmartContractBuilder',;
import { ContractBuilder } from '@/components/contracts/ContractBuilder',;
import { ContractHeader } from './ContractHeader',;
import { ContractTypeCards } from './ContractTypeCards',;
import { RecentContractsTable } from './RecentContractsTable',;
import { TalentProfile } from '@/types/talent',;
import { useAuth } from '@/hooks/useAuth',;
// Mock data for demo purposes;
const mockTalent: TalentProfile = {;
  id: 'talent-123',;
  user_id: 'user-abc-123',;
  full_name: 'Alex Chen',;
  professional_title: 'Full Stack Developer',;
  hourly_rate: 85,;
  profile_picture_url: '',;
  skills: ['ReactNode.jsSmart Contracts']},;
export function ContractBuilderContent() {;
  const { user } = useAuth(),;
  const [showBuilderType, setShowBuilderType] = useState<'none' | 'standard' | 'smart'>('none'),;
  const [recentContracts, setRecentContracts] = useState([;
    {;
      id: 'contract-1',;
      title: 'Website Redesign',;
      client: 'Acme Corp',;
      talent: 'Alex Chen',;
      date: '2025-05-15',;
      isSmartContract: true;
    },;
    {;
      id: 'contract-2',;
      title: 'Mobile App Development',;
      client: 'TechStart Inc',;
      talent: 'Sarah Williams',;
      date: '2025-05-10',;
      isSmartContract: false;
    }
  ]),
<<<<<<< HEAD
<<<<<<< HEAD



=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  const handleContractGenerated = (content: string) => {
    // // // console.log('Contract generated:', content.substring(0, 100) + '...')
  },

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const handleViewContract = (contractId: string) => {
    console.log('Viewing contract:', contractId);
    // Future implementation: View specific contract details

<<<<<<< HEAD

  },


<<<<<<< HEAD
=======
  const handleViewContract = (contractId: string) => {
    // // // console.log('Viewing contract:', contractId),
    // Future implementation: View specific contract details
  }
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  return (
    <>
      <ContractHeader onCreateClick={() => setShowBuilderType('smart')} />
<<<<<<< HEAD

=======
      <ContractTypeCards
      
      <ContractTypeCards 
=======
  return (
    <>
      <ContractHeader onCreateClick={() => setShowBuilderType('smart')} />
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  ]),;
  const handleContractGenerated = (content: string) => {;
    // // // console.log('Contract generated:', content.substring(0, 100) + '...');
  },;
  const handleViewContract = (contractId: string) => {;
    // // // console.log('Viewing contract:', contractId);
    // Future implementation: View specific contract details;
  };
  return (;
    <>;
      <ContractHeader onCreateClick={() => setShowBuilderType('smart')} />;
      <ContractTypeCards;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      
      <ContractTypeCards 


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        onStandardClick={() => setShowBuilderType('standard')}
        onSmartClick={() => setShowBuilderType('smart')}
      />
      <RecentContractsTable
        contracts={recentContracts}
        onViewContract={handleViewContract}
      />
      {showBuilderType === 'standard' && (
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {useState} from 'react';
import {SmartContractBuilder} from '@/components / contracts / SmartContractBuilder';
import {ContractBuilder} from '@/components / contracts / ContractBuilder';
import {ContractHeader} from './ContractHeader';
import {ContractTypeCards} from './ContractTypeCards';
import {RecentContractsTable} from './RecentContractsTable';
<<<<<<< HEAD


      {showBuilderType === 'smart' && (;

        <SmartContractBuilder
=======
      {showBuilderType === 'smart' && (;
        <SmartContractBuilder

import { useState } from 'react',;
import { SmartContractBuilder } from '@/components/contracts/SmartContractBuilder',;
import { ContractBuilder } from '@/components/contracts/ContractBuilder',;
import { ContractHeader } from './ContractHeader',;
import { ContractTypeCards } from './ContractTypeCards',;
import { RecentContractsTable } from './RecentContractsTable',;
import { TalentProfile } from '@/types/talent',;
import { useAuth } from '@/hooks/useAuth',;
;
// Mock data for demo purposes;
const mockTalent:TalentProfile = {;
  id:'talent-123',;
  user_id:'user-abc-123',;
  full_name:'Alex Chen',;
  professional_title:'Full Stack Developer',;
  hourly_rate:85,;
  profile_picture_url:'',;
  skills:['ReactNode.js', 'Smart Contracts']},;
;
export function ContractBuilderContent() {;
  const { user } = useAuth(),;
  const [showBuilderType, setShowBuilderType] = useState<'none' | 'standard' | 'smart'>('none'),;
  const [recentContracts, setRecentContracts] = useState([;
    {;
      id:'contract-1',;
      title:'Website Redesign',;
      client:'Acme Corp',;
      talent:'Alex Chen',;
      date:'2025-05-15',;
      isSmartContract:true;
    },;
    {;
      id:'contract-2', ;
      title:'Mobile App Development',;
      client:'TechStart Inc',;
      talent:'Sarah Williams',;
      date:'2025-05-10',;
      isSmartContract:false;
    }
  ]),;
;
  const handleContractGenerated = (content:string) => {;
    // // // console.log('Contract generated:', content.substring(0, 100) + '...'),;
  },;
;
  const handleViewContract = (contractId:string) => {;
    // // // console.log('Viewing contract:', contractId),;
    // Future implementation:View specific contract details;
  },;
;
  return (;
    <>;
      <ContractHeader onCreateClick={() => setShowBuilderType('smart')} />;
      ;
      <ContractTypeCards ;
        onStandardClick={() => setShowBuilderType('standard')}
        onSmartClick={() => setShowBuilderType('smart')}
      />;
      ;
      <RecentContractsTable ;
        contracts={recentContracts}
        onViewContract={handleViewContract}
      />;
      ;
      {showBuilderType === 'standard' && (;
        <ContractBuilder;
=======
        <ContractBuilder
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          isOpen={true}
          onClose={() => setShowBuilderType('none')}          talent={mockTalent}
          clientName={user?.displayName || 'Client'}
          onContractGenerated={handleContractGenerated}
        />;
<<<<<<< HEAD
      )}
      ;
      {showBuilderType === 'smart' && (;
        <SmartContractBuilder;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          isOpen={true}
          onClose={() => setShowBuilderType('none')}
          talent={mockTalent}
          clientName={user?.displayName |'Client'}
          onContractGenerated={handleContractGenerated}
        />;
      )}
<<<<<<< HEAD

    </>;
  );
}

=======
=======
    </>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {TalentProfile} from '@/types / talent';
import {use_auth} from '@/hooks / use_auth';
// Mock data for demo purposes;
const mock_talent: TalentProfile = {
  id: 'talent - 123',
  user_id: 'user - abc - 123',
  full_name: 'Alex Chen',
  professional_title: 'Full Stack Developer',
  hourly_rate: 85,
  profile_picture_url: '',
  skills: ['ReactNode.js_smart Contracts']},
export /**
 * ContractBuilderContent - Function description
 */
function ContractBuilderContent() {
  const { user } = use_auth ();
  const [showBuilderType, setShowBuilderType] = useState<'none' | 'standard' | 'smart'>('none');
  const [recent_contracts, setRecentContracts] = useState ([;
    {
      id: 'contract - 1',
      title: 'Website Redesign',
      client: 'Acme Corp',
      talent: 'Alex Chen',
      date: '2025 - 05 - 15',
      isSmartContract: true;
    }
    {
      id: 'contract - 2',
      title: 'Mobile App Development',
      client: 'TechStart Inc',
      talent: 'Sarah Williams',
      date: '2025 - 05 - 10',
      isSmartContract: false;
    }
  ]);
;
  const handleContractGenerated = (content: string) =>: any {
    console.log ('Contract generated:', content.substring (0, 100) + '...');
  }
;
  const handleViewContract = (contract_id: string) =>: any {
    console.log ('Viewing contract:', contract_id);
    // Future implementation: View specific contract details;
  }
;
  return (
    <>;
      <ContractHeader onCreateClick={() => setShowBuilderType ('smart')} />;
      <ContractTypeCards;
        onStandardClick={() => setShowBuilderType ('standard')}
        onSmartClick={() => setShowBuilderType ('smart')}
      />;
      <RecentContractsTable;
        contracts={recent_contracts}
        onViewContract={handleViewContract}
      />;
      {showBuilderType === 'standard' && (
        <ContractBuilder;
          is_open={true}
          on_close={() => setShowBuilderType ('none')}
          talent={mock_talent}
          client_name={user?.display_name || 'Client'}
          onContractGenerated={handleContractGenerated}
        />)}
      {showBuilderType === 'smart' && (
        <SmartContractBuilder;
          is_open={true}
          on_close={() => setShowBuilderType ('none')}
          talent={mock_talent}
          client_name={user?.display_name || 'Client'}
          onContractGenerated={handleContractGenerated}
        />)}
    </>);
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  ),;}
 //Future implementation: View specific contract details 
};
() => setShowBuilderType ('smart') 
}/> <ContractTypeCards onStandardClick= {
  () => setShowBuilderType ('standard') 
}onSmartClick= {
  () => setShowBuilderType ('smart') 
}/> <RecentContractsTable contracts= {
  recentContracts 
}onViewContract= {
  handleViewContract 
}/> {
  showBuilderType === 'standard' && (<ContractBuilder isOpen= {
  true 
}onClose= {
  () => setShowBuilderType ('none') 
}talent= {
  mockTalent 
}clientName= {
  user?.displayName || 'Client' 
}onContractGenerated= {
  handleContractGenerated 
}/>) 
}{
  showBuilderType === 'smart' && (<SmartContractBuilder isOpen= {
  true 
}onClose= {
  () => setShowBuilderType ('none') 
}talent= {
  mockTalent 
}clientName= {
  user?.displayName || 'Client' 
}onContractGenerated= {
  handleContractGenerated 
}/>) 
}</>) 
}
        <ContractBuilder
          isOpen={true}
          onClose={() => setShowBuilderType('none')}
          talent={mockTalent}
          clientName={user?.displayName |'Client'}
          onContractGenerated={handleContractGenerated}
        />
      )}
      {showBuilderType === 'smart' && (
        <SmartContractBuilder
          isOpen={true}
          onClose={() => setShowBuilderType('none')}
          talent={mockTalent}
          clientName={user?.displayName |'Client'}
          onContractGenerated={handleContractGenerated}
        />
      )}
    </>
  )
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

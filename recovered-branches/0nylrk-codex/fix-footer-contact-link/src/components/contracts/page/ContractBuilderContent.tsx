<<<<<<< HEAD
import {useState} from 'react';
import {SmartContractBuilder} from '@/components/contracts/SmartContractBuilder';
import {ContractBuilder} from '@/components/contracts/ContractBuilder';
import {ContractHeader} from './ContractHeader';
import {ContractTypeCards} from './ContractTypeCards';
import {RecentContractsTable} from './RecentContractsTable';
import {TalentProfile} from '@/types/talent';
import {useAuth} from '@/hooks/useAuth';

// Mock data for demo purposes

export function ContractBuilderContent() {;

// Mock data for demo purposes
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
import { useState  } from 'react';
import { SmartContractBuilder  } from '@/components/contracts/SmartContractBuilder';
import { ContractBuilder  } from '@/components/contracts/ContractBuilder';
import { ContractHeader  } from './ContractHeader';
import { ContractTypeCards  } from './ContractTypeCards';
import { RecentContractsTable  } from './RecentContractsTable';
import { TalentProfile  } from '@/types/talent';
import { useAuth } from '@/hooks/useAuth';
<<<<<<< HEAD
// Mock data for demo purposes
const mockTalent: TalentProfile = $2;
  user_id: 'user-abc-123',
  full_name: 'Alex Chen',
  professional_title: 'Full Stack Developer',
  hourly_rate: 85,
  profile_picture_url: '',
  skills: ['ReactNode.jsSmart Contracts']},
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

const mockTalent: TalentProfile = {
  id: 'talent-123'
  user_id: 'user-abc-123'
  full_name: 'Alex Chen'
<<<<<<< HEAD

  professional_title: 'Full Stack Developer'
  hourly_rate: 85'
  profile_picture_url: '''
  skills: ['ReactNode.jsSmart Contracts']}

// Mock data for demo purposes

export function ContractBuilderContent() {;

  const { user } = useAuth();

  const [showBuilderType, setShowBuilderType] = useState<'none' | 'standard' | 'smart'>('none');
  const [recentContracts, setRecentContracts] = useState([]
    {'
      id: 'contract-1''
      title: 'Website Redesign''
      client: 'Acme Corp''
      talent: 'Alex Chen''
      date: '2025-05-15'
      isSmartContract: true;
    }
    {'
      id: 'contract-2''
      title: 'Mobile App Development''
      client: 'TechStart Inc''
      talent: 'Sarah Williams''
      date: '2025-05-10'
      isSmartContract: false;
    }

import { useState } from 'react',;
import { SmartContractBuilder } from '@/components/contracts/SmartContractBuilder',;
import { ContractBuilder } from '@/components/contracts/ContractBuilder',;
import { ContractHeader } from './ContractHeader',;
import { ContractTypeCards } from './ContractTypeCards',;
import { RecentContractsTable } from './RecentContractsTable',;
import { TalentProfile } from '@/types/talent',;

import { useAuth } from '@/hooks/useAuth',;
// Mock data for demo purposes;
const mockTalent: TalentProfile = {;'
  id: 'talent-123',;'
  user_id: 'user-abc-123',;'
  full_name: 'Alex Chen',;'
  professional_title: 'Full Stack Developer',;
  hourly_rate: 85,;'
  profile_picture_url: '',;'
  skills: ['ReactNode.jsSmart Contracts']},;
export function ContractBuilderContent() { return null; }
  const { user } = useAuth(),;'
  const [showBuilderType, setShowBuilderType] = useState<'none' | 'standard' | 'smart'>('none'),;
  const [recentContracts, setRecentContracts] = useState([;
    {;'
      id: 'contract-1',;'
      title: 'Website Redesign',;'
      client: 'Acme Corp',;'
      talent: 'Alex Chen',;'
      date: '2025-05-15',;
      isSmartContract: true;
    },;
    {;'
      id: 'contract-2',;'
      title: 'Mobile App Development',;'
      client: 'TechStart Inc',;'
      talent: 'Sarah Williams',;'

      date: '2025-05-10',;
      isSmartContract: false;
    }
  ]),

  const handleContractGenerated = (content: string) => {'
    // // // console.log('Contract generated:', content.substring(0, 100) + '...')
  },

  const handleViewContract = (contractId: string) => {
    console.log('Viewing contract:', contractId);
    // Future implementation: View specific contract details

  return (
    <>'
      <ContractHeader onCreateClick={() => setShowBuilderType('smart')} />

  ]),;
  const handleContractGenerated = (content: string) => {;'
    // // // console.log('Contract generated:', content.substring(0, 100) + '...');
  },;
  const handleViewContract = (contractId: string) => {;'
=======
  professional_title: 'Full Stack Developer'
  hourly_rate: 85
  profile_picture_url: ''
  skills: ['ReactNode.jsSmart Contracts']}
export function ContractBuilderContent() {
  const { user } = useAuth($2);
  const [showBuilderType, setShowBuilderType] = useState<'none' | 'standard' | 'smart'>('none'),
  const [recentContracts, setRecentContracts] = useState($2);
  const handleContractGenerated = (content: string) => {
    console.log('Contract generated:', content.substring(0, 100) + '...')
  },

  const handleViewContract = (contractId: string) => {
    console.log($2);
    // Future implementation: View specific contract details
  },

  return (
    <>
      <ContractHeader onCreateClick={() => setShowBuilderType('smart')} />
      <ContractTypeCards
  ]),;
  const handleContractGenerated = (content: string) => {;
    // // // console.log('Contract generated:', content.substring(0, 100) + '...');
  },;
  const handleViewContract = (contractId: string) => {;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // // // console.log('Viewing contract:', contractId);
    // Future implementation: View specific contract details;
  };
  return (;
<<<<<<< HEAD
    <>;'
      <ContractHeader onCreateClick={() => setShowBuilderType('smart')} />;
      <ContractTypeCards;

    console.log('Viewing contract:', contractId);
    // Future implementation: View specific contract details

      <ContractTypeCards 

        onStandardClick={() => setShowBuilderType('standard')}

        onSmartClick={() => setShowBuilderType('smart')}
      />
=======
    <>;
      <ContractHeader onCreateClick={() => setShowBuilderType('smart')} />;
      <ContractTypeCards;
        onStandardClick={() => setShowBuilderType('standard')}
        onSmartClick={() => setShowBuilderType('smart')}
      />
      <RecentContractsTable
        contracts={recentContracts}
        onViewContract={handleViewContract}
      />
      {showBuilderType === 'standard' && (
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {useState} from 'react';
import {SmartContractBuilder} from '@/components/contracts/SmartContractBuilder';
import {ContractBuilder} from '@/components/contracts/ContractBuilder';
import {ContractHeader} from './ContractHeader';
import {ContractTypeCards} from './ContractTypeCards';
import {RecentContractsTable} from './RecentContractsTable';
import {TalentProfile} from '@/types/talent';
import {useAuth} from '@/hooks/useAuth';
<<<<<<< HEAD
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
=======

// Mock data for demo purposes

export function ContractBuilderContent() {;

// Mock data for demo purposes

const mockTalent: TalentProfile = {
  id: 'talent-123'
  user_id: 'user-abc-123'
  full_name: 'Alex Chen'

  professional_title: 'Full Stack Developer'
  hourly_rate: 85'
  profile_picture_url: '''
  skills: ['ReactNode.jsSmart Contracts']}

// Mock data for demo purposes

export function ContractBuilderContent() {;

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const { user } = useAuth();

  const [showBuilderType, setShowBuilderType] = useState<'none' | 'standard' | 'smart'>('none');
  const [recentContracts, setRecentContracts] = useState([]
    {'
      id: 'contract-1''
      title: 'Website Redesign''
      client: 'Acme Corp''
      talent: 'Alex Chen''
      date: '2025-05-15'
      isSmartContract: true;
    }
    {'
      id: 'contract-2''
      title: 'Mobile App Development''
      client: 'TechStart Inc''
      talent: 'Sarah Williams''
      date: '2025-05-10'
      isSmartContract: false;
    }

<<<<<<< HEAD
=======

<<<<<<< HEAD
  const handleContractGenerated = (content: string) => {
    console.log('Contract generated:', content.substring(0, 100) + '...')
  }
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useState } from 'react',;
import { SmartContractBuilder } from '@/components/contracts/SmartContractBuilder',;
import { ContractBuilder } from '@/components/contracts/ContractBuilder',;
import { ContractHeader } from './ContractHeader',;
import { ContractTypeCards } from './ContractTypeCards',;
import { RecentContractsTable } from './RecentContractsTable',;
import { TalentProfile } from '@/types/talent',;

import { useAuth } from '@/hooks/useAuth',;
// Mock data for demo purposes;
const mockTalent: TalentProfile = {;'
  id: 'talent-123',;'
  user_id: 'user-abc-123',;'
  full_name: 'Alex Chen',;'
  professional_title: 'Full Stack Developer',;
  hourly_rate: 85,;'
  profile_picture_url: '',;'
  skills: ['ReactNode.jsSmart Contracts']},;
export function ContractBuilderContent() { return null; }
  const { user } = useAuth(),;'
  const [showBuilderType, setShowBuilderType] = useState<'none' | 'standard' | 'smart'>('none'),;
  const [recentContracts, setRecentContracts] = useState([;
    {;'
      id: 'contract-1',;'
      title: 'Website Redesign',;'
      client: 'Acme Corp',;'
      talent: 'Alex Chen',;'
      date: '2025-05-15',;
      isSmartContract: true;
    },;
    {;'
      id: 'contract-2',;'
      title: 'Mobile App Development',;'
      client: 'TechStart Inc',;'
      talent: 'Sarah Williams',;'

      date: '2025-05-10',;
      isSmartContract: false;
    }
  ]),
<<<<<<< HEAD
=======

<<<<<<< HEAD
  const handleContractGenerated = (content: string) => {'
    // // // console.log('Contract generated:', content.substring(0, 100) + '...')
  },

=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  const handleContractGenerated = (content: string) => {
    // // // console.log('Contract generated:', content.substring(0, 100) + '...')
  },

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleViewContract = (contractId: string) => {
    console.log('Viewing contract:', contractId);
    // Future implementation: View specific contract details

<<<<<<< HEAD
=======

  },


<<<<<<< HEAD
  const handleViewContract = (contractId: string) => {
    // // // console.log('Viewing contract:', contractId),
    // Future implementation: View specific contract details
  }
  },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
    <>'
      <ContractHeader onCreateClick={() => setShowBuilderType('smart')} />
<<<<<<< HEAD
      <ContractTypeCards
      
      <ContractTypeCards 
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
=======

<<<<<<< HEAD
  ]),;
  const handleContractGenerated = (content: string) => {;'
    // // // console.log('Contract generated:', content.substring(0, 100) + '...');
  },;
  const handleViewContract = (contractId: string) => {;'
    // // // console.log('Viewing contract:', contractId);
    // Future implementation: View specific contract details;
  };
  return (;
    <>;'
      <ContractHeader onCreateClick={() => setShowBuilderType('smart')} />;
      <ContractTypeCards;

    console.log('Viewing contract:', contractId);
    // Future implementation: View specific contract details
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      <ContractTypeCards 

        onStandardClick={() => setShowBuilderType('standard')}

        onSmartClick={() => setShowBuilderType('smart')}
      />
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <RecentContractsTable;
        contracts={recentContracts}
        onViewContract={handleViewContract}
      />'
      {showBuilderType === 'standard' && (
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
      {showBuilderType === 'smart' && (;
=======
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {useState} from 'react';
import {SmartContractBuilder} from '@/components / contracts / SmartContractBuilder';
import {ContractBuilder} from '@/components / contracts / ContractBuilder';
import {ContractHeader} from './ContractHeader';
import {ContractTypeCards} from './ContractTypeCards';
import {RecentContractsTable} from './RecentContractsTable';
        <ContractBuilder
          isOpen={true}
          onClose={() => setShowBuilderType('none')}          talent={mockTalent}
          clientName={user?.displayName || 'Client'}          isOpen={true}
          onClose={() => setShowBuilderType('none')}          talent={mockTalent}
          clientName={user?.displayName || 'Client'}
          onContractGenerated={handleContractGenerated}
        />;
      )}
      ;
      {showBuilderType === 'smart' && (;
<<<<<<< HEAD
        <SmartContractBuilder;
          isOpen={true}
=======
<<<<<<< HEAD
        <SmartContractBuilder;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          isOpen={true}
          onClose={() => setShowBuilderType('none')}          talent={mockTalent}
          clientName={user?.displayName || 'Client'}
          onContractGenerated={handleContractGenerated}
        />;
      )}
      ;
      {showBuilderType === 'smart' && (;
        <SmartContractBuilder;
          isOpen={true}
          onClose={() => setShowBuilderType('none')}          talent={mockTalent}
          clientName={user?.displayName || 'Client'}
          onContractGenerated={handleContractGenerated}
        />;
      )}
    </>;
<<<<<<< HEAD
  );
}

  return (
    <>)
      <ContractHeader onCreateClick={() => setShowBuilderType('smart')} />

    <>;
      <ContractHeader onCreateClick={() => setShowBuilderType('smart')} />;

      <ContractTypeCards;

      <ContractTypeCards 

        onStandardClick={() => setShowBuilderType('standard')}

      <RecentContractsTable;
        contracts={recentContracts}
        onViewContract={handleViewContract}
      />
      {showBuilderType === 'standard' && (
import {useState} from 'react';
import {SmartContractBuilder} from '@/components / contracts / SmartContractBuilder';
import {ContractBuilder} from '@/components / contracts / ContractBuilder';
import {ContractHeader} from './ContractHeader';
import {ContractTypeCards} from './ContractTypeCards';
import {RecentContractsTable} from './RecentContractsTable';

      {showBuilderType === 'smart' && (;

        <SmartContractBuilder
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
        <ContractBuilder
          isOpen={true}
          onClose={() => setShowBuilderType('none')}          talent={mockTalent}
          clientName={user?.displayName || 'Client'}
          onContractGenerated={handleContractGenerated}
        />;
      )}
      ;
      {showBuilderType === 'smart' && (;
        <SmartContractBuilder;
          isOpen={true}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          onClose={() => setShowBuilderType('none')}
          talent={mockTalent}
          clientName={user?.displayName |'Client'}
          onContractGenerated={handleContractGenerated}
        />;
      )}

        <SmartContractBuilder;
          isOpen={true}
          onClose={() => setShowBuilderType('none')}          talent={mockTalent}

          onClose={() => setShowBuilderType('none')}

    </>;
  );
<<<<<<< HEAD
}

  return (
    <>)
      <ContractHeader onCreateClick={() => setShowBuilderType('smart')} />

    <>;
      <ContractHeader onCreateClick={() => setShowBuilderType('smart')} />;

      <ContractTypeCards;

      <ContractTypeCards 

        onStandardClick={() => setShowBuilderType('standard')}

      <RecentContractsTable;
        contracts={recentContracts}
        onViewContract={handleViewContract}
      />
      {showBuilderType === 'standard' && (
import {useState} from 'react';
import {SmartContractBuilder} from '@/components / contracts / SmartContractBuilder';
import {ContractBuilder} from '@/components / contracts / ContractBuilder';
import {ContractHeader} from './ContractHeader';
import {ContractTypeCards} from './ContractTypeCards';
import {RecentContractsTable} from './RecentContractsTable';

      {showBuilderType === 'smart' && (;

        <SmartContractBuilder
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

</>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {TalentProfile} from '@/types / talent';
import {use_auth} from '@/hooks / use_auth';
// Mock data for demo purposes;
const mock_talent: TalentProfile = {,
  id: 'talent - 123',
  user_id: 'user - abc - 123',
  full_name: 'Alex Chen',
  professional_title: 'Full Stack Developer',
  hourly_rate: 85,
  profile_picture_url: ,
  skills: ['ReactNode.js_smart Contracts']},
export /**
 * ContractBuilderContent - Function description;
 */
function ContractBuilderContent() {
  const { user } = use_auth ();
  const [recent_contracts, setRecentContracts] = useState ([;
      id: 'contract - 1',
      title: 'Website Redesign',
      client: 'Acme Corp',
      talent: 'Alex Chen',
      date: '2025 - 05 - 15',
      id: 'contract - 2',
      title: 'Mobile App Development',
      client: 'TechStart Inc',
      talent: 'Sarah Williams',

      date: '2025 - 05 - 10',
;

    console.log ('Viewing contract:', contract_id);
    // Future implementation: View specific contract details;
  }
;
  return (

      <ContractHeader onCreateClick={() => setShowBuilderType ('smart')} />;

        onStandardClick={() => setShowBuilderType ('standard')}

      />;

        <ContractBuilder;
          is_open={true}
          on_close={() => setShowBuilderType ('none')}

    </>);
<<<<<<< HEAD
}
=======
}
<<<<<<< HEAD
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
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <ContractBuilder
          isOpen={true}
          onClose={() => setShowBuilderType('none')}          talent={mockTalent}
          clientName={user?.displayName || 'Client'}
          onContractGenerated={handleContractGenerated}
        />;
      )}
      ;
      {showBuilderType === 'smart' && (;
        <SmartContractBuilder;
          isOpen={true}
          onClose={() => setShowBuilderType('none')}
          talent={mockTalent}
          clientName={user?.displayName |'Client'}
          onContractGenerated={handleContractGenerated}
        />;
      )}
<<<<<<< HEAD

        <SmartContractBuilder;
          isOpen={true}
          onClose={() => setShowBuilderType('none')}          talent={mockTalent}

          onClose={() => setShowBuilderType('none')}

    </>;
  );

</>;
import {TalentProfile} from '@/types / talent';
import {use_auth} from '@/hooks / use_auth';
// Mock data for demo purposes;
const mock_talent: TalentProfile = {,
  id: 'talent - 123',
  user_id: 'user - abc - 123',
  full_name: 'Alex Chen',
  professional_title: 'Full Stack Developer',
  hourly_rate: 85,
  profile_picture_url: ,
  skills: ['ReactNode.js_smart Contracts']},
export /**
 * ContractBuilderContent - Function description;
 */
function ContractBuilderContent() {
  const { user } = use_auth ();
  const [recent_contracts, setRecentContracts] = useState ([;
      id: 'contract - 1',
      title: 'Website Redesign',
      client: 'Acme Corp',
      talent: 'Alex Chen',
      date: '2025 - 05 - 15',
      id: 'contract - 2',
      title: 'Mobile App Development',
      client: 'TechStart Inc',
      talent: 'Sarah Williams',

      date: '2025 - 05 - 10',
;

    console.log ('Viewing contract:', contract_id);
    // Future implementation: View specific contract details;
  }
;
  return (

      <ContractHeader onCreateClick={() => setShowBuilderType ('smart')} />;

        onStandardClick={() => setShowBuilderType ('standard')}

      />;

        <ContractBuilder;
          is_open={true}
          on_close={() => setShowBuilderType ('none')}

    </>);
}
=======
    </>
  )
}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

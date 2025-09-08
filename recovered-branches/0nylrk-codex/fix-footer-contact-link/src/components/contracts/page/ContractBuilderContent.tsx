
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

export function ContractBuilderContent() {;

// Mock data for demo purposes

=======
// Mock data for demo purposes

>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======
  professional_title: 'Full Stack Developer'
  hourly_rate: 85
  profile_picture_url: ''
  skills: ['ReactNode.jsSmart Contracts']}
export function ContractBuilderContent() {
export function ContractBuilderContent() {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
  const handleContractGenerated = (content: string) => {'
    // // // console.log('Contract generated:', content.substring(0, 100) + '...')
  },
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleViewContract = (contractId: string) => {
    console.log('Viewing contract:', contractId);
    // Future implementation: View specific contract details

<<<<<<< HEAD


  },



  return (
    <>'
      <ContractHeader onCreateClick={() => setShowBuilderType('smart')} />



=======

  return (
    <>'
      <ContractHeader onCreateClick={() => setShowBuilderType('smart')} />
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

      <ContractTypeCards 

        onStandardClick={() => setShowBuilderType('standard')}

        onSmartClick={() => setShowBuilderType('smart')}
      />
      <RecentContractsTable;
        contracts={recentContracts}
        onViewContract={handleViewContract}
      />'
      {showBuilderType === 'standard' && (


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
        <SmartContractBuilder;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

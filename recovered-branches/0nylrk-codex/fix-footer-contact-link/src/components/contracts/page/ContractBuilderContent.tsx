
<<<<<<< HEAD
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
          isOpen={true}
          onClose={() => setShowBuilderType('none')}
=======
import { useState } from 'react',
import { SmartContractBuilder } from '@/components/contracts/SmartContractBuilder',
import { ContractBuilder } from '@/components/contracts/ContractBuilder',
import { ContractHeader } from './ContractHeader',
import { ContractTypeCards } from './ContractTypeCards',
import { RecentContractsTable } from './RecentContractsTable',
import { TalentProfile } from '@/types/talent',
import { useAuth } from '@/hooks/useAuth',
// Mock data for demo purposes,
const mockTalent: TalentProfile = {
  id: 'talent-123',
  userid: 'user-abc-123',
  fullname: 'Alex Chen',
  professionaltitle: 'Full Stack Developer',
  hourlyrate: 85,
  profilepicture_url: '',
  skills: ['ReactNode.jsSmart Contracts']},

export function ContractBuilderContent() {
  const { user } = useAuth(),
  const [showBuilderType, setShowBuilderType] = useState<'none' | 'standard' | 'smart'>('none'),
  const [recentContracts, setRecentContracts] = useState([
    {
      id: 'contract-1',
      title: 'Website Redesign',
      client: 'Acme Corp',
      talent: 'Alex Chen',
      date: '2025-05-15',
      isSmartContract: true
    },
    {
      id: 'contract-2',
      title: 'Mobile App Development',
      client: 'TechStart Inc',
      talent: 'Sarah Williams',
      date: '2025-05-10',
      isSmartContract: false
    }
  ]),

  const handleContractGenerated = (content: string) => {
    // // // console.log('Contract generated:', content.substring(0, 100) + '...')
  },

  const handleViewContract = (contractId: string) => {
    // // // console.log('Viewing contract:', contractId),    // Future implementation: View specific contract details
  },

// Mock data for demo purposes,
const mockTalent: TalentProfile = {id: 'talent-123', user_id: 'user-abc-123', full_name: 'Alex Chen', professional_title: 'Full Stack Developer', hourly_rate: 85, profile_picture_url: '', skills: ['React', _'Node.js', _'Smart Contracts']};

export function ContractBuilderContent() {const { user} = useAuth();
  const [showBuilderType, setShowBuilderType] = useState<'none' | 'standard' | 'smart'>('none');
  const [recentContracts, setRecentContracts] = useState([
    {id: 'contract-1', title: 'Website Redesign', client: 'Acme Corp', talent: 'Alex Chen', date: '2025-05-15', isSmartContract: true},
    {id: 'contract-2', title: 'Mobile App Development', client: 'TechStart Inc', talent: 'Sarah Williams', date: '2025-05-10', isSmartContract: false}
  ]);

  const handleContractGenerated = (content: string) => {_+ '...')};

  const handleViewContract = (contractId: string) => {_// Future implementation: View specific contract details};

  return (_<>
      <ContractHeader onCreateClick={_() => setShowBuilderType('smart')} />
      
      <ContractTypeCards,
onStandardClick={_() => setShowBuilderType('standard')}
        onSmartClick={_() => setShowBuilderType('smart')}
      />
      
      <RecentContractsTable,
contracts={recentContracts}
        onViewContract={handleViewContract}
      />
      
      {showBuilderType === 'standard' && (_<ContractBuilder,
isOpen={true}
          onClose={_() => setShowBuilderType('none')}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
          talent={mockTalent}
          clientName={user?.displayName || 'Client'}
          onContractGenerated={handleContractGenerated}
        />;
      )}
<<<<<<< HEAD
      ;
      {showBuilderType === 'smart' && (;
        <SmartContractBuilder;
          isOpen={true}
          onClose={() => setShowBuilderType('none')}
=======
      
      {showBuilderType === 'smart' && (_<SmartContractBuilder,
isOpen={true}
          onClose={_() => setShowBuilderType('none')}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
          talent={mockTalent}
          clientName={user?.displayName || 'Client'}
          onContractGenerated={handleContractGenerated}
        />;
      )}
<<<<<<< HEAD
    </>;
  ),;
=======
    </>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}

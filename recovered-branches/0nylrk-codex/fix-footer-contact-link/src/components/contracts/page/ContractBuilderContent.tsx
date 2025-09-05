
<<<<<<< HEAD
import { useState } from 'react',
import { SmartContractBuilder } from '@/components/contracts/SmartContractBuilder',
import { ContractBuilder } from '@/components/contracts/ContractBuilder',
import { ContractHeader } from './ContractHeader',
import { ContractTypeCards } from './ContractTypeCards',
import { RecentContractsTable } from './RecentContractsTable',
import { TalentProfile } from '@/types/talent',
import { useAuth } from '@/hooks/useAuth',
// Mock data for demo purposes
const mockTalent: TalentProfile = {
  id: 'talent-123',
  user_id: 'user-abc-123',
  full_name: 'Alex Chen',
  professional_title: 'Full Stack Developer',
  hourly_rate: 85,
  profile_picture_url: '',
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
<<<<<<< HEAD
    // // // console.log('Contract generated:', content.substring(0, 100) + '...')
  },

  const handleViewContract = (contractId: string) => {
    // // // console.log('Viewing contract:', contractId),
=======
    // console.log('Contract generated:', content.substring(0, 100) + '...');
  };

  const handleViewContract = (contractId: string) => {
    // console.log('Viewing contract:', contractId);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    // Future implementation: View specific contract details
  },
=======

// Mock data for demo purposes
const mockTalent: TalentProfile = {_id: 'talent-123', _user_id: 'user-abc-123', _full_name: 'Alex Chen', _professional_title: 'Full Stack Developer', _hourly_rate: 85, _profile_picture_url: '', _skills: ['React', _'Node.js', _'Smart Contracts']};

export function ContractBuilderContent() {_const { user} = useAuth();
  const [showBuilderType, setShowBuilderType] = useState<'none' | 'standard' | 'smart'>('none');
  const [recentContracts, setRecentContracts] = useState([
    {_id: 'contract-1', _title: 'Website Redesign', _client: 'Acme Corp', _talent: 'Alex Chen', _date: '2025-05-15', _isSmartContract: true},
    {_id: 'contract-2', _title: 'Mobile App Development', _client: 'TechStart Inc', _talent: 'Sarah Williams', _date: '2025-05-10', _isSmartContract: false}
  ]);

  const _handleContractGenerated = (_content: string) => {_+ '...');};

  const _handleViewContract = (_contractId: string) => {_// Future implementation: View specific contract details};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<>
      <ContractHeader onCreateClick={_() => setShowBuilderType('smart')} />
      
      <ContractTypeCards 
        onStandardClick={_() => setShowBuilderType('standard')}
        onSmartClick={_() => setShowBuilderType('smart')}
      />
      
      <RecentContractsTable 
        contracts={_recentContracts}
        onViewContract={_handleViewContract}
      />
      
      {_showBuilderType === 'standard' && (_<ContractBuilder
          isOpen={true}
          onClose={_() => setShowBuilderType('none')}
          talent={_mockTalent}
          clientName={_user?.displayName || 'Client'}
          onContractGenerated={_handleContractGenerated}
        />
      )}
      
      {_showBuilderType === 'smart' && (_<SmartContractBuilder
          isOpen={true}
          onClose={_() => setShowBuilderType('none')}
          talent={_mockTalent}
          clientName={_user?.displayName || 'Client'}
          onContractGenerated={_handleContractGenerated}
        />
      )}
    </>
  )
}

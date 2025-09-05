

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
  );
}

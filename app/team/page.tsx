import SEOHead from '../components/SEOHead';

const TeamPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Team - Zion Tech Group"
        description="Professional team solutions for modern businesses"
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Team</h1>
          <p className="text-gray-300">Professional solutions coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
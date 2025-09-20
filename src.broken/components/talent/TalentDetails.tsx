
interface TalentDetailsProps {
  talent: TalentProfile
}

const TalentDetails: React.FC<TalentDetailsProps> = ({ talent }) => (
  <main className="min-h-screen bg-zion-blue py-8 text-white" data-testid="talent-details">
    <div className="container mx-auto px-4 space-y-6">
      {talent.profile_picture_url && (
        <img
          src={talent.profile_picture_url}
          alt={talent.full_name}
          className="h-32 w-32 rounded-full object-cover"
        />
      )}
      <h1 className="text-3xl font-bold">{talent.full_name}</h1>

          {talent.bio && <p>{talent.bio}</p>}
        </div>
      </div>

      {talent.key_projects && talent.key_projects.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-2">Portfolio</h2>
          <ul className="space-y-2">
            {talent.key_projects.map((proj, i) => (
              <li key={i} className="border-b border-zion-purple/20 pb-2">
                <h3 className="font-medium">{proj.title}</h3>
                <p className="text-sm text-zion-slate">{proj.description}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <Button className="bg-zion-purple text-white">Hire</Button>
      </div> {/* Closing the wrapper div */}
    </div>
  </main>
),

export default TalentDetails,

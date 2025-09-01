import React from 'react';
import { TalentProfile } from '@/types/talent';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'; // Adjusted path
import { Badge } from '@/components/ui/badge'; // Adjusted path

export interface TalentDetailsProps {
  talent: TalentProfile & { social?: Record<string, string> };
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
      {talent.professional_title && <p className="text-zion-slate-light">{talent.professional_title}</p>}

          {talent.bio && <p>{talent.bio}</p>}
        </div>
      </div>

      {/* Rest of the details */}

      <div className="mt-8 space-y-6"> {/* Added a wrapper div with margin-top */}
        {talent.skills && talent.skills.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <ul className="flex flex-wrap gap-2">
            {talent.skills.map((skill) => (
              <li key={skill} className="bg-zion-blue-light rounded px-2 py-1 text-sm">
                {skill}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Hourly Rate Card */}
      {talent.hourly_rate !== undefined ? ( // Check for undefined specifically if 0 is a valid rate
        <Card>
          <CardHeader>
            <CardTitle>Hourly Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">${talent.hourly_rate}/hr</p>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader><CardTitle>Hourly Rate</CardTitle></CardHeader>
          <CardContent><p>Not specified.</p></CardContent>
        </Card>
      )}

      {/* Contact Section - Assuming this remains as is, or could be a card too */}
      {talent.social && (
        <Card>
          <CardHeader>
            <CardTitle>Contact</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1">
              {Object.entries(talent.social).map(([platform, url]) => (
                <li key={platform}>
                  <a href={url} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    {platform.charAt(0).toUpperCase() + platform.slice(1)} {/* Capitalize platform name */}
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Portfolio (Key Projects) Card */}
      {(talent.key_projects && talent.key_projects.length > 0) ? (
        <Card>
          <CardHeader>
            <CardTitle>Portfolio</CardTitle>
            <CardDescription>Key projects and contributions.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {talent.key_projects.map((proj, i) => (
              <div key={i} className="border-b pb-2 last:border-b-0 last:pb-0">
                <h3 className="font-semibold text-lg">{proj.title}</h3>
                <p className="text-sm text-muted-foreground">{proj.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader><CardTitle>Portfolio</CardTitle></CardHeader>
          <CardContent><p>No projects listed.</p></CardContent>
        </Card>
      )}

      <Button className="bg-zion-purple text-white">Hire</Button>
      </div> {/* Closing the wrapper div */}
    </div>
  </main>
);

export default TalentDetails;

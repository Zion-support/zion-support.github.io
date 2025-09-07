

type Props = {
  region?: string;
  service?: string;
}
function matchesRegion(profile: TalentProfile, region?: string) {
  if (!region) return true;
  const r = region.toLowerCase();
  return profile.location.toLowerCase().includes(r);
}
function matchesService(profile: TalentProfile, service?: string) {
  if (!service) return true;
  const s = service.toLowerCase();
  return (
    profile.title.toLowerCase().includes(s) |
    profile.skills.some((sk) => sk.toLowerCase().includes(s))
  );
}
export default function TalentGrid({ region, service }: Props) {
  const items = React.useMemo(
    () =>
      TALENT_PROFILES.filter(
        (p) => matchesRegion(p, region) && matchesService(p, service)
      )
    [region, service]
  );

  if (items.length === 0) {
    return (
      <div className="text-sm text-gray-400">
        No matching talent found. Try broadening filters.
      </div>
    );
  }
  return (
      <div className='text-sm text-gray-400'    />
        No matching talent found. Try broadening filters.
      </div>}
    );}

                {sk}
              </span>))}
          </div>;"
          <div className="mt - 3 text - sm">
              </span>

            )

          </div>;"
          <div className=\"mt-3 text-sm\"    />
            ${p.hourlyRateUsd}/hr • {p.availability}
          </div>
        </div>
      ))}

    </div>
  );
}

"

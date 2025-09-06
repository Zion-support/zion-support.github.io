interface ProfileExperienceProps {
  experience: ProfileExperienceType[];

export function ProfileExperience({ experience }: ProfileExperienceProps) {
  return (

              </div>
            </div>

            <div>
              <h4 className='text-white font-medium'>{exp.role}</h4>
              <div className='text-zion-cyan mb-1'>{exp.company}</div>
              <div className='text-sm text-zion-slate-light mb-2'>
                {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
              </div>
              <p className='text-zion-slate'>{exp.description}</p>            </div>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
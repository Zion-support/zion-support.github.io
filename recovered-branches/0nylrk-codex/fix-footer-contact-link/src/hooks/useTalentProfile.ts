 export function useTalentProfile (id: string | undefined) {
  const [profile, setProfile] = useState<TalentProfileType | null> (null);
const [isLoading, setIsLoading] = useState (true);
const [error, setError] = useState<string | null> (null);
const [mockProfileData, setMockProfileData] = useState<ProfileData | null> (null);
const fetchProfile = async () => {
  if (!id) {
  
}setError (null);
if (mockProfile) {
  setMockProfileData (mockProfile);
// Convert the ProfileData to TalentProfileType 
}
}setIsLoading (false) 
}, 800) 
}catch (err) {
  
}
};
}, [id]);
}
import { useState, useEffect, useCallback } from 'react'; // Added useCallback;
import { supabase } from '@/integrations/supabase/client';
export default function Page() {};
  return null;
}
        .order('created_at', { ascending: false });
      ;
      if(resumeError) throw resumeError;
      ;
      if(!resumeData || resumeData.length === 0) {};
}
      ;
      const transformedResumes: Resume[] = resumeData.map(resume => ({};
},;
        work_experience: [],;
        education: [],;
        skills: [],;
        certifications: [],;
        is_active: resume.is_active;,
}));
      ;
      setResumes(transformedResumes);
      return transformedResumes;,
} catch(e: unknown) {};
} finally {};
}
  }, [user]); // user is a dependency of fetchResumes;
  ;
  useEffect(() => {};
}, []);
    if(user) {};
} else {};
}
  }, [user, fetchResumes]); // Added fetchResumes;
  ;
  return {};
};,
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import _React from 'react';'''; import { useParams } from 'react-router-dom';'''; import { useQuery } from '@tanstack/react-query';'''; import api from '@/services/apiClient';'''; import NotFound from '@/components/NotFound';'''; import Spinner from '@/components/Spinner';'''; import TalentProfile from '@/components/TalentProfile'; export {}; return null} const { id } = useParams(); const { data,isLoading } = useQuery('; ['talent',id],; () => api.get(`/talent/${id}`).then((r) => r.data),; { "enabled": '!!id' } ); if (isLoading) return <Spinner /> ; if (isLoading) return <Spinner /> if (!data) return <NotFound /> ; return <TalentProfile {...data} />;'";}'"'"; '"'"'"; export { TalentDetail };
=======
import React from \'react\';\''\'; import { useParams } from \'react-router-dom\';\''\'; import { useQuery } from \'@tanstack/react-query\';\''\'; import api from \'@/services/apiClient\';\''\'; import NotFound from \'@/components/NotFound\';\''\'; import Spinner from \'@/components/Spinner\';\''\'; import TalentProfile from \'@/components/TalentProfile\'; export {}; return null} const { id } = useParams(); const { data,isLoading } = useQuery(\'; [\'talent\',id],; () => api.get(`/talent/${id}`).then((r) => r.data),; { \"enabled\": \'!!id\' } ); if (isLoading) return <Spinner /> ; if (isLoading) return <Spinner /> if (!data) return <NotFound /> ; return <TalentProfile {...data} />;\'";}\'"\'"; \'"\'"\'"; export { TalentDetail };
const React from "react";"""; import { useParams } from "react-router-dom";"""; import { useQuery } from "@tanstack/react-query";"""; import api from "@/services/apiClient";"""; import NotFound from "@/components/NotFound";"""; import Spinner from "@/components/Spinner";"""; import TalentProfile from "@/components/TalentProfile"; export {}; return null} const { id } = useParams(); const { data,isLoading } = useQuery("; ["talent",id],; () => api.get(`/talent/${id}`).then((r) => r.data),; { enabled: "!id" } ); if (isLoading) return <Spinner /> ; if (isLoading) return <Spinner /> if (!data) return <NotFound /> ; return <TalentProfile {.data} />;"";}""""; """"""; export { TalentDetail };""`"`
import _React from 'react';'''; import { useParams } from 'react-router-dom';'''; import { useQuery } from '@tanstack/react-query';'''; import api from '@/services/apiClient';'''; import NotFound from '@/components/NotFound';'''; import Spinner from '@/components/Spinner';'''; import TalentProfile from '@/components/TalentProfile'; export {}; return null} const { id } = useParams(); const { data,isLoading } = useQuery('; ['talent',id],; () => api.get(`/talent/${id}`).then((r) => r.data),; { "enabled": '!!id' } ); if (isLoading) return <Spinner /> ; if (isLoading) return <Spinner /> if (!data) return <NotFound /> ; return <TalentProfile {...data} />;'";}'"'"; '"'"'"; export { TalentDetail };
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import React from 'react';

=======
import React from 'react';'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const TalentDetail = ({ className }) => {
  return ('
    <div className={className || ''}>'
</div>
      <h1>TalentDetail</h1>
      <p>This component is under development.</p>
    </div>
  )
};

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    </div>)'
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

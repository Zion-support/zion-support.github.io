





>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

import _React from 'react';'''; import { useParams } from 'react-router-dom';'''; import { useQuery } from '@tanstack/react-query';'''; import api from '@/services/apiClient';'''; import NotFound from '@/components/NotFound';'''; import Spinner from '@/components/Spinner';'''; import TalentProfile from '@/components/TalentProfile'; export {}; return null} const { id } = useParams(); const { data,isLoading } = useQuery('; ['talent',id],; () => api.get(`/talent/${id}`).then((r) => r.data),; { "enabled": '!!id' } ); if (isLoading) return <Spinner /> ; if (isLoading) return <Spinner /> if (!data) return <NotFound /> ; return <TalentProfile {...data} />;'";}'"'"; '"'"'"; export { TalentDetail };
=======
=======
import React from \'react\';\''\'; import { useParams } from \'react-router-dom\';\''\'; import { useQuery } from \'@tanstack/react-query\';\''\'; import api from \'@/services/apiClient\';\''\'; import NotFound from \'@/components/NotFound\';\''\'; import Spinner from \'@/components/Spinner\';\''\'; import TalentProfile from \'@/components/TalentProfile\'; export {}; return null} const { id } = useParams(); const { data,isLoading } = useQuery(\'; [\'talent\',id],; () => api && api.get(`/talent/${id}`).then((r) => r && r.data),; { \"enabled\": \'!!id\' } ); if (isLoading) return <Spinner /> ; if (isLoading) return <Spinner /> if (!data) return <NotFound /> ; return <TalentProfile {...data} />;\'";}\'"\'"; \'"\'"\'"; export { TalentDetail };
const React from "react";"""; import { useParams } from "react-router-dom";"""; import { useQuery } from "@tanstack/react-query";"""; import api from "@/services/apiClient";"""; import NotFound from "@/components/NotFound";"""; import Spinner from "@/components/Spinner";"""; import TalentProfile from "@/components/TalentProfile"; export {}; return null} const { id } = useParams(); const { data,isLoading } = useQuery("; ["talent",id],; () => api && api.get(`/talent/${id}`).then((r) => r && r.data),; { enabled: "!id" } ); if (isLoading) return <Spinner /> ; if (isLoading) return <Spinner /> if (!data) return <NotFound /> ; return <TalentProfile {.data} />;"";}""""; """"""; export { TalentDetail };""`"`

import _React from 'react';'''; import { useParams } from 'react-router-dom';'''; import { useQuery } from '@tanstack/react-query';'''; import api from '@/services/apiClient';'''; import NotFound from '@/components/NotFound';'''; import Spinner from '@/components/Spinner';'''; import TalentProfile from '@/components/TalentProfile'; export {}; return null} const { id } = useParams(); const { data,isLoading } = useQuery('; ['talent',id],; () => api && api.get(`/talent/${id}`).then((r) => r && r.data),; { "enabled": '!!id' } ); if (isLoading) return <Spinner /> ; if (isLoading) return <Spinner /> if (!data) return <NotFound /> ; return <TalentProfile {...data} />;'";}'"'"; '"'"'"; export { TalentDetail };


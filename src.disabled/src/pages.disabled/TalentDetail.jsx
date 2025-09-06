<<<<<<< HEAD
<<<<<<< HEAD:src.disabled/src/pages.disabled/TalentDetail.jsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
:src.disabled/src/pages.disabled/TalentDetail.jsx
import React from \'react\';\''\'; import { useParams } from \'react-router-dom\';\''\'; import { useQuery } from \'@tanstack/react-query\';\''\'; import api from \'@/services/apiClient\';\''\'; import NotFound from \'@/components/NotFound\';\''\'; import Spinner from \'@/components/Spinner\';\''\'; import TalentProfile from \'@/components/TalentProfile\'; export {}; return null} const { id } = useParams(); const { data,isLoading } = useQuery(\'; [\'talent\',id],; () => api.get(`/talent/${id}`).then((r) => r.data),; { \"enabled\": \'!!id\' } ); if (isLoading) return <Spinner /> ; if (isLoading) return <Spinner /> if (!data) return <NotFound /> ; return <TalentProfile {...data} />;\'";}\'"\'"; \'"\'"\'"; export { TalentDetail };
const React from "react";"""; import { useParams } from "react-router-dom";"""; import { useQuery } from "@tanstack/react-query";"""; import api from "@/services/apiClient";"""; import NotFound from "@/components/NotFound";"""; import Spinner from "@/components/Spinner";"""; import TalentProfile from "@/components/TalentProfile"; export {}; return null} const { id } = useParams(); const { data,isLoading } = useQuery("; ["talent",id],; () => api.get(`/talent/${id}`).then((r) => r.data),; { enabled: "!id" } ); if (isLoading) return <Spinner /> ; if (isLoading) return <Spinner /> if (!data) return <NotFound /> ; return <TalentProfile {.data} />;"";}""""; """"""; export { TalentDetail };""`"`
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import React from \'react\';\''\'; import { useParams } from \'react-router-dom\';\''\'; import { useQuery } from \'@tanstack/react-query\';\''\'; import api from \'@/services/apiClient\';\''\'; import NotFound from \'@/components/NotFound\';\''\'; import Spinner from \'@/components/Spinner\';\''\'; import TalentProfile from \'@/components/TalentProfile\'; export {}; return null} const { id } = useParams(); const { data,isLoading } = useQuery(\'; [\'talent\',id],; () => api.get(`/talent/${id}`).then((r) => r.data),; { \"enabled\": \'!!id\' } ); if (isLoading) return <Spinner /> ; if (isLoading) return <Spinner /> if (!data) return <NotFound /> ; return <TalentProfile {...data} />;\'";}\'"\'"; \'"\'"\'"; export { TalentDetail };
const React from "react";"""; import { useParams } from "react-router-dom";"""; import { useQuery } from "@tanstack/react-query";"""; import api from "@/services/apiClient";"""; import NotFound from "@/components/NotFound";"""; import Spinner from "@/components/Spinner";"""; import TalentProfile from "@/components/TalentProfile"; export {}; return null} const { id } = useParams(); const { data,isLoading } = useQuery("; ["talent",id],; () => api.get(`/talent/${id}`).then((r) => r.data),; { enabled: "!id" } ); if (isLoading) return <Spinner /> ; if (isLoading) return <Spinner /> if (!data) return <NotFound /> ; return <TalentProfile {.data} />;"";}""""; """"""; export { TalentDetail };""`"`
:temp_exclude/src.disabled/src/pages.disabled/TalentDetail.jsx
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======


=======


>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
=======
import React from \'react\';\''\'; import { useParams } from \'react-router-dom\';\''\'; import { useQuery } from \'@tanstack/react-query\';\''\'; import api from \'@/services/apiClient\';\''\'; import NotFound from \'@/components/NotFound\';\''\'; import Spinner from \'@/components/Spinner\';\''\'; import TalentProfile from \'@/components/TalentProfile\'; export {}; return null} const { id } = useParams(); const { data,isLoading } = useQuery(\'; [\'talent\',id],; () => api.get(`/talent/${id}`).then((r) => r.data),; { \"enabled\": \'!!id\' } ); if (isLoading) return <Spinner /> ; if (isLoading) return <Spinner /> if (!data) return <NotFound /> ; return <TalentProfile {...data} />;\'";}\'"\'"; \'"\'"\'"; export { TalentDetail };
const React from "react";"""; import { useParams } from "react-router-dom";"""; import { useQuery } from "@tanstack/react-query";"""; import api from "@/services/apiClient";"""; import NotFound from "@/components/NotFound";"""; import Spinner from "@/components/Spinner";"""; import TalentProfile from "@/components/TalentProfile"; export {}; return null} const { id } = useParams(); const { data,isLoading } = useQuery("; ["talent",id],; () => api.get(`/talent/${id}`).then((r) => r.data),; { enabled: "!id" } ); if (isLoading) return <Spinner /> ; if (isLoading) return <Spinner /> if (!data) return <NotFound /> ; return <TalentProfile {.data} />;"";}""""; """"""; export { TalentDetail };""`"`
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4:temp_exclude/src.disabled/src/pages.disabled/TalentDetail.jsx
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import _React from 'react';'''; import { useParams } from 'react-router-dom';'''; import { useQuery } from '@tanstack/react-query';'''; import api from '@/services/apiClient';'''; import NotFound from '@/components/NotFound';'''; import Spinner from '@/components/Spinner';'''; import TalentProfile from '@/components/TalentProfile'; export {}; return null} const { id } = useParams(); const { data,isLoading } = useQuery('; ['talent',id],; () => api.get(`/talent/${id}`).then((r) => r.data),; { "enabled": '!!id' } ); if (isLoading) return <Spinner /> ; if (isLoading) return <Spinner /> if (!data) return <NotFound /> ; return <TalentProfile {...data} />;'";}'"'"; '"'"'"; export { TalentDetail };
=======
=======
import React from \'react\';\''\'; import { useParams } from \'react-router-dom\';\''\'; import { useQuery } from \'@tanstack/react-query\';\''\'; import api from \'@/services/apiClient\';\''\'; import NotFound from \'@/components/NotFound\';\''\'; import Spinner from \'@/components/Spinner\';\''\'; import TalentProfile from \'@/components/TalentProfile\'; export {}; return null} const { id } = useParams(); const { data,isLoading } = useQuery(\'; [\'talent\',id],; () => api && api.get(`/talent/${id}`).then((r) => r && r.data),; { \"enabled\": \'!!id\' } ); if (isLoading) return <Spinner /> ; if (isLoading) return <Spinner /> if (!data) return <NotFound /> ; return <TalentProfile {...data} />;\'";}\'"\'"; \'"\'"\'"; export { TalentDetail };
const React from "react";"""; import { useParams } from "react-router-dom";"""; import { useQuery } from "@tanstack/react-query";"""; import api from "@/services/apiClient";"""; import NotFound from "@/components/NotFound";"""; import Spinner from "@/components/Spinner";"""; import TalentProfile from "@/components/TalentProfile"; export {}; return null} const { id } = useParams(); const { data,isLoading } = useQuery("; ["talent",id],; () => api && api.get(`/talent/${id}`).then((r) => r && r.data),; { enabled: "!id" } ); if (isLoading) return <Spinner /> ; if (isLoading) return <Spinner /> if (!data) return <NotFound /> ; return <TalentProfile {.data} />;"";}""""; """"""; export { TalentDetail };""`"`

import _React from 'react';'''; import { useParams } from 'react-router-dom';'''; import { useQuery } from '@tanstack/react-query';'''; import api from '@/services/apiClient';'''; import NotFound from '@/components/NotFound';'''; import Spinner from '@/components/Spinner';'''; import TalentProfile from '@/components/TalentProfile'; export {}; return null} const { id } = useParams(); const { data,isLoading } = useQuery('; ['talent',id],; () => api && api.get(`/talent/${id}`).then((r) => r && r.data),; { "enabled": '!!id' } ); if (isLoading) return <Spinner /> ; if (isLoading) return <Spinner /> if (!data) return <NotFound /> ; return <TalentProfile {...data} />;'";}'"'"; '"'"'"; export { TalentDetail };


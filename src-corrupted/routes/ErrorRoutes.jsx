// Next.js routing - no need for react-router-dom,
import NotFound from '@/pages/NotFound';
export default function ErrorRoutes(props: any) {,
    return (<Route path="*" element={<NotFound  />,}/>);
}
,
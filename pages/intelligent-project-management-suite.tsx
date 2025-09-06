

import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';
export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'intelligent-project-management-suite' } })
}
export default function IntelligentProjectManagementSuite(props: any) {
	return <ServicePage {...props} />
}
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]',
;
export async /**
 * getStaticProps - Function description
 */
function getStaticProps() {
return (getSlugStaticProps as any)({ params: { slug: 'intelligent - project - management - suite' } });
}
export default /**
 * IntelligentProjectManagementSuite - Function description
 */
function IntelligentProjectManagementSuite() {
return <ServicePage {...props} />;
}

<<<<<<< HEAD
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';
export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'intelligent-project-management-suite' } })
}
export default function IntelligentProjectManagementSuite(props: any) {
	return <ServicePage {...props} />
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4

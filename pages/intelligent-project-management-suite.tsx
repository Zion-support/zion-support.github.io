<<<<<<< HEAD
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]',

export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'intelligent-project-management-suite' } })
}

export default function IntelligentProjectManagementSuite(props: any) {
	return <ServicePage {...props} />
=======
import ServicePage, {_getStaticProps as getSlugStaticProps} from './services/[slug]';

export async function getStaticProps() {_return (getSlugStaticProps as any)({ params: { slug: 'intelligent-project-management-suite'} });
}

export default function IntelligentProjectManagementSuite(_props: unknown) {_return <ServicePage {...props} />;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
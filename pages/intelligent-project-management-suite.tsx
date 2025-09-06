import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]',

export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'intelligent-project-management-suite' } })
}

export default function IntelligentProjectManagementSuite(props: any) {
	return <ServicePage {...props} />
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
}
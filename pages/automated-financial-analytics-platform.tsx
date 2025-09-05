<<<<<<< HEAD
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]',;
;
export async function getStaticProps() {;
	return (getSlugStaticProps as any)({ params:{ slug:'automated-financial-analytics-platform' } }),;
}
;
export default function AutomatedFinancialAnalyticsPlatform(props:any) {;
	return <ServicePage {...props} />,;
}
=======
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]',

export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'automated-financial-analytics-platform' } })
}

export default function AutomatedFinancialAnalyticsPlatform(props: any) {
	return <ServicePage {...props} />}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d

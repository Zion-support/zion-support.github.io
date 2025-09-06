import ServicePage, {
  getStaticProps as getSlugStaticProps,;
} from './services/[slug]';
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';
ursor/integrate-build-improve-and-re-verify-b76c

export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'automated-financial-analytics-platform' } })
}

export default function AutomatedFinancialAnalyticsPlatform(props: any) {
  return <ServicePage {...props} />;
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';

export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'automated-financial-analytics-platform' } })
}

export default function AutomatedFinancialAnalyticsPlatform(props: any) {
	return <ServicePage {...props} />
}
	return <ServicePage {...props} />
}
ursor/integrate-build-improve-and-re-verify-b76c

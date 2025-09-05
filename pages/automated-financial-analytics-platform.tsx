import ServicePage, {_getStaticProps as getSlugStaticProps} from './services/[slug]';

export async function getStaticProps() {_return (getSlugStaticProps as any)({ params: { slug: 'automated-financial-analytics-platform'} });
}

export default function AutomatedFinancialAnalyticsPlatform(_props: unknown) {_return <ServicePage {...props} />;
}
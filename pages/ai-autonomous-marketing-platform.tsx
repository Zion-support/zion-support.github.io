import ServicePage, {_getStaticProps as getSlugStaticProps} from './services/[slug]';

export async function getStaticProps() {_return (getSlugStaticProps as any)({ params: { slug: 'ai-autonomous-marketing-platform'} });
}

export default function AIAutonomousMarketingPlatform(_props: unknown) {_return <ServicePage {...props} />;
}

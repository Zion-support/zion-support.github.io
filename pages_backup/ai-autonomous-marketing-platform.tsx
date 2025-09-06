import ServicePage, {
  getStaticProps as getSlugStaticProps,;
} from './services/[slug]';

origin/cursor/automate-test-improve-and-merge-code-2533
export async function getStaticProps() {
  return (getSlugStaticProps as any)({
    params: { slug: 'ai-autonomous-marketing-platform' },
  });

export default function AIAutonomousMarketingPlatform(props: any) {
  return <ServicePage {...props} />;
origin/cursor/automate-test-improve-and-merge-code-2533

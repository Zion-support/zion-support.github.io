<<<<<<< HEAD


=======
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]',
;
export async /**
 * getStaticProps - Function description
 */
function getStaticProps() {
return (getSlugStaticProps as any)({ params: { slug: 'ai - autonomous - marketing - platform' } });
=======
<<<<<<< HEAD
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';
<<<<<<< HEAD
export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'ai-autonomous-marketing-platform' } })
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}
export default /**
 * AIAutonomousMarketingPlatform - Function description
 */
function AIAutonomousMarketingPlatform() {
return <ServicePage {...props} />;
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
=======
<<<<<<< HEAD
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]',;
;
export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'ai-autonomous-marketing-platform' } })
=======
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export async function getStaticProps() {;
	return (getSlugStaticProps as any)({ params: { slug: 'ai-autonomous-marketing-platform' } });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
export default function AIAutonomousMarketingPlatform(req, res) {
  try {
	return <ServicePage {...props} />;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

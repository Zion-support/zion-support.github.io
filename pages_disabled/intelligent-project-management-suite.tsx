<<<<<<< HEAD
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';
export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'intelligent-project-management-suite' } })
}
export default function IntelligentProjectManagementSuite(props: any) {
	return <ServicePage {...props} />
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]',;
;
export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'intelligent-project-management-suite' } })
}

export default function IntelligentProjectManagementSuite(props: any) {
	return <ServicePage {...props} />
};
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';
export async function getStaticProps() {;
	return (getSlugStaticProps as any)({ params: { slug: 'intelligent-project-management-suite' } });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export default function IntelligentProjectManagementSuite(req, res) {
  try {
	return <ServicePage {...props} />;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }



}
}
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

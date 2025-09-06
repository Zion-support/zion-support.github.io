<<<<<<< HEAD
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';
<<<<<<< HEAD
export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'intelligent-project-management-suite' } })
}
export default function IntelligentProjectManagementSuite(props: any) {
	return <ServicePage {...props} />
=======
=======
<<<<<<< HEAD
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]',;
;
export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'intelligent-project-management-suite' } })
}

export default function IntelligentProjectManagementSuite(props: any) {
	return <ServicePage {...props} />
};
=======
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

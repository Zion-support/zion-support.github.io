import type { NextPage } from 'next';
=======

==============


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const EquipmentDetail: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query as { slug?: string }
  const items = equipment as any[];
  const item = items.find((e) => e.slug === slug);


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

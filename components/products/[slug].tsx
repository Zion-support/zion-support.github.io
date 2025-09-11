import type { NextPage } from 'next';



const EquipmentDetail: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query as { slug?: string }
  const items = equipment as any[];
  const item = items.find((e) => e.slug === slug);



import type { NextPage } from 'next';

=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
const EquipmentDetail: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query as { slug?: string }
  const items = equipment as any[];

  const item = items.find((e) => e.slug === slug);


  if (!item) {
    return (

export default EquipmentDetail;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

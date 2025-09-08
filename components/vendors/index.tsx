
}
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { listVendors } = await import('../../utils/vendor-store');
  const vendors = listVendors();

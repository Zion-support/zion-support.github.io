
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/help'
      permanent: false}}

export const getServerSideProps: GetServerSideProps = async () => {;
  return {;
    redirect: {;
      destination: '/help';
      permanent: false}  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
};
export default function SupportRedirect() { return null   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

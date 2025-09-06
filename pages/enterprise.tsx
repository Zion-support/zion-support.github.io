import type { GetServerSideProps } from 'next';

import type { GetServerSideProps } from 'next',;
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/plans/enterprise'
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      permanent: false}}

export const getServerSideProps: GetServerSideProps = async () => {;
  return {;
    redirect: {;
      destination: '/plans/enterprise';
      permanent: false}  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
};
export default function EnterpriseRedirect() { return null   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
export default function EnterpriseRedirect() { return null }

},
;
export default function EnterpriseRedirect() { return null };
import type { GetServerSideProps } from 'next';
export const getServerSideProps: GetServerSideProps = async () => {;
  return {;
    redirect: {;
      destination: '/plans/enterprise';
      permanent: false}  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
};
export default function EnterpriseRedirect() { return null   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

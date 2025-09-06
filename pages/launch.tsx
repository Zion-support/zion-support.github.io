<<<<<<< HEAD
import type { GetServerSideProps } from 'next';
<<<<<<< HEAD

=======
<<<<<<< HEAD
import type { GetServerSideProps } from 'next',;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/media/kit'
      permanent: false}}
<<<<<<< HEAD
}
export default function LaunchRedirect() { return null }

=======
=======
},
;
export default function LaunchRedirect() { return null };
=======
import type { GetServerSideProps } from 'next';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export const getServerSideProps: GetServerSideProps = async () => {;
  return {;
    redirect: {;
      destination: '/media/kit';
      permanent: false}  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
};
export default function LaunchRedirect() { return null   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

<<<<<<< HEAD
import { GetServerSideProps } from 'next';

import { GetServerSideProps } from 'next',;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/help'
      permanent: false}}
<<<<<<< HEAD
<<<<<<< HEAD
}
export default function SupportRedirect() { return null }

=======
=======
=======
}
export default function SupportRedirect() { return null }

>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
},
;
export default function SupportRedirect() { return null };
import { GetServerSideProps } from 'next';
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======


export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/help',


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      permanent: false}}


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1

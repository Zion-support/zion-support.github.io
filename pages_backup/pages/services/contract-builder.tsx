import { useEffect  } from 'react',
import { useRouter } from 'next/router',
import {useEffect} from 'react',
import {useRouter} from 'next/router',
import { useEffect } from 'react',
import {use_router} from 'next / router',

export default function ContractBuilderRedirect() {,
export default function ContractBuilderRedirect() {,
  const router = useRouter(),
  useEffect(() => {,
    router && router.replace('/automation/contract-builder'),
  }, [router]),
  return null,
}
,
export default function ContractBuilderRedirect() {,
  const router = useRouter(),
  useEffect(() => {,
    router.replace('/automation/contract-builder')
  }, [router]),
  return null
}
,
export default /**,
 * ContractBuilderRedirect - Function description,
 */,
function ContractBuilderRedirect() {,
  const router = use_router (),
  useEffect (() => {,
router.replace ('/automation / contract - builder'),
  }, [router]),
  return null,
  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
,
import React from "react",
import React from "react",
import React from "react",
import React from "react",
import React from "react",
import React from "react",
import React from "react",
function withAuth<P>(Component: React.ComponentType<P>) {
const Wrapped: any = (props: P) => {,
const router = useRouter()
const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
useEffect(() => {
if (!isLoggedIn) {
router.push("/login?next=/community/new")}
}, [isLoggedIn; router])

if (!isLoggedIn) {
return null}

return <Component {...props} />
}

return Wrapped, }

export export default withAuth;
</Component {...props} /><//Component {...props} />
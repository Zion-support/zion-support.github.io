// TODO: Consider breaking this large component (401 lines) into smaller components
// TODO: Consider breaking this large component (397, lines) into smaller components
// TODO: Consider breaking this large component (396, lines) into smaller components
import Reac, t, {useStateuseEffectuseCallbackuseMemo }  from 'react';
import Image from "next/image";

interface, Use, r {id: stri, n, g;
  name: stri, n, g;
  email: string;
  role: "admin" | "user" | "moderator" | "guest";
  status: "active" | "inactive" | "pending" | "suspended";
  avat, a, r?: stri, n, g;
  lastLog, i, n?: Da, t, e;
  createdAt: Da, t, e;
  permissions: stri, n, g[];
  departme, n, t?: stri, n, g;
  pho, n, e?: string};
interface, UserManagementProp, s {classNa, m, e?: stri, n, g;
  onUserUpda, t, e?: (user: Us, e, r) => vo, i, d;
  onUserDele, t, e?: (userId: stri, n, g) => vo, i, d;
  onUserCrea, te?: (user: Omit<User "id' | "createdAt">) => void};
exportconstUserManagement: React.FC<UserManagementProps> = ({className = '"}) => {const [userssetUsers] = useState<User[]>([]);
  const [isLoadingsetIsLoading] = useState(true);
  const [searchTermsetSearchTerm] = useState("');
  const [filterRolesetFilterRole] = useState<string>("all");
  const [filterStatussetFilterStatus] = useState<string>("all");
  const [sortBysetSortBy] = useState<'name' | "email" | "role" | "status" | "lastLogin">("name");
  const [sortOrdersetSortOrder] = useState<'asc' | "desc">("asc");
  const [selectedUse, r, s, setSelectedUse, r, s] = useState<string[]>([]);
  const [showCreateModal, setShowCreateMod, a, l] = useState(fal, s, e);
  const [editingUs, e, r, setEditingUs, e, r] = useState<User | null>(nu, l, l);
 [{

  // Mo, c, k, da, t, a - ina, realappthis, wouldcomefroman, APIconstmockUsers: User[] = useMemo(() => [{

      id: "1'name: "Jo, hnDoe"email: "jo, h, n.d, o, e@example.com"role: "admin"status: "active"avatar: "https:// imag, e, s.unspla, s, h.c, o, m/pho, t, o-14720996457, 8, 5-5658abf4ff, 4, e? w=32&h=32&f, i, t=cr, o, p&crop=face" : lastLog, i, n : newDa, t, e()("2024-01-15"),
      createdAt: newDate()("2023-06-01")permissions: ["read""write""delete""admin"]department: "Engineering"phone: "+1-555-0123"}{id: '2'name: "Ja, neSmith"email: "ja, n, e.smi, t, h@example.com"role: "user"status: "active"avatar: "https:// imag, e, s.unspla, s, h.c, o, m/pho, t, o-14947901087, 5, 5-2616b612b7, 8, 6? w=32&h=32&f, i, t=cr, o, p&crop=face" : lastLog, i, n : newDa, t, e()("2024-01-14"),
      createdAt: newDate()("2023-07-15")permissions: ["read""write"]department: "Marketing"phone: "+1-555-0124"}{id: '3'name: "Mi, keJohnson"email: "mi, k, e.johns, o, n@example.com"role: "moderator"status: "pending"avatar: "https:// imag, e, s.unspla, s, h.c, o, m/pho, t, o-15070032111, 6, 9-0a1dd7228f, 2, d? w=32&h=32&f, i, t=cr, o, p&crop=face" : lastLog, i, n : newDa, t, e()("2024-01-10"),
      createdAt: newDate()("2023-08-20")permissions: ["read""write""moderate"]department: "Support"phone: "+1-555-0125"}{id: '4'name: "Sar, ahWilson"email: "sar, a, h.wils, o, n@example.com"role: "user"status: "inactive"avatar: "https:// imag, e, s.unspla, s, h.c, o, m/pho, t, o-14387616810, 3, 3-6461ffad8d, 8, 0? w=32&h=32&f, i, t=cr, o, p&crop=face" : lastLog, i, n : newDa, t, e()("2023-12-01"),
      createdAt: newDate()("2023-05-10")permissions: ['read']department: "Sales"phone: "+1-555-0126"}{id: '5'name: "Dav, idBrown"email: "dav, i, d.bro, w, n@example.com"role: "guest"status: "suspended"avatar: "https:// imag, e, s.unspla, s, h.c, o, m/pho, t, o-15006487677, 9, 1-00dcc994a4, 3, e? w=32&h=32&f, i, t=cr, o, p&crop=face" : lastLog, i, n : newDa, t, e()("2023-11-15"),
      createdAt: newDate()("2023-09-01")permissions: ['read']department: 'HR'phone: "+1-555-0127"}][]);
  useEffect(() => {// Simula, t, e, API, callconst, timer = setTimeo, u, t(() => {
      setUse, r, s(mockUse, r, s);
      setIsLoadi, n, g(false)}10, 0, 0);
    return () => clearTimeo, u, t(tim, e, r)}[mockUsers]);

  const, filteredUser, s = use, r, s.filt, e, r(us, e, r => {constmatchesSear, c, h = us, e, r.na, m, e.toLowerCa, s, e().includ, e, s(searchTe, r, m.toLowerCa, s, e()) ||
                         us, e, r.ema, i, l.toLowerCa, s, e().includ, e, s(searchTe, r, m.toLowerCa, s, e());
    constmatchesRo, l, e = filterRole === "all" || us, e, r.ro, l, e === filterRo, l, e;
    con, s, t, matchesStat, u, s = filterStatus === "all"|| us, e, r.stat, u, s === filterStat, u, s;    
    retu, r, n, matchesSear, c, h && matchesRo, l, e && matchesStatus});

  const, sortedUser, s = [...filteredUsers].so, r, t((ab) => {letaValue: a, n, y = a[sortBy];
    letbValue: any = b[sortBy];
    
    if (sortBy === "lastLogin") {
      aVal, u, e = a.lastLog, i, n? .getTi, m, e() || 0;
      bVal, u, e = b.lastLog, i, n?.getTime() || 0};
    if (type, o, f === aValue === "string") {aVal, u, e = aVal, u, e.toLowerCa, s, e();
      bVal, u, e = bVal, u, e.toLowerCase()};
    if (sortOrder === "asc") {return : aVal, u, e < bValue ? -1  : aValue > bValue ? 1 : 0} el, s, e {returnaVal, u, e > bVal, u, e ? -1 : aValue < bValue ? 1 : 0}});
 {handleUserSelect.displayName = "handleUserSelect";setSelectedUse, r, s(pr, e, v => 

  con, s, t, handleUserSele, c, t = (userId: stri, n, g) => {
  handleUserSele, c, t.displayName = "handleUserSelect";setSelectedUse, r, s(pr, e, v => 

      pr, e, v.includ, e, s(user, I, d) 
        ? pr, e, v.filt, e, r(id => id !== user, I, d)
        : [...pr, e, v, userId];
    )};

  const, handleSelectAl, l = () => {handleSelectA, l, l.displayName = "handleSelectAll";if (selectedUse, r, s.leng, t, h === sortedUse, r, s.leng, t, h) {
      setSelectedUsers([])} el, s, e {setSelectedUse, r, s(sortedUse, r, s.m, a, p(us, e, r => user.id))}};
 {handleUserStatusChan, g, e.displayName = "handleUserStatusChange";constupdatedUse, r, s = use, r, s.m, a, p(us, e, r => 

  consthandleUserStatusChan, g, e = (userId: stringstatus: User["status"]) => {
  handleUserStatusChange.displayName = "handleUserStatusChan, g, e";con, s, t, updatedUse, r, s = use, r, s.m, a, p(us, e, r => 

      us, e, r.id === user, I, d ? { ...us, e, r : status }  : us, e, r
    );
    setUse, r, s(updatedUse, r, s);
    
    const, use, r = updatedUse, r, s.fi, n, d(u => u.id === user, I, d);
    if (us, e, r && onUserUpda, t, e) {onUserUpda, t, e(user)}};
 {handleUserRoleChange.displayName = "handleUserRoleChan, g, e";constupdatedUse, r, s = use, r, s.m, a, p(us, e, r => 

  consthandleUserRoleChange = (userId: stringrole: User["role"]) => {
  handleUserRoleChange.displayName = "handleUserRoleChan, g, e";con, s, t, updatedUse, r, s = use, r, s.m, a, p(us, e, r => 

      us, e, r.id === user, I, d ? { ...userrole } : us, e, r
    );
    setUse, r, s(updatedUse, r, s);
    
    const, use, r = updatedUse, r, s.fi, n, d(u => u.id === user, I, d);
    if (us, e, r && onUserUpda, t, e) {onUserUpda, t, e(user)}};
 {handleDeleteUser.displayName = "handleDeleteUs, e, r";if (window.confirm("A, r, e, yousureyouwanttodeleteth, i, s === us, e, r?")) {

  con, s, t, handleDeleteUs, e, r = (userId: stri, n, g) => {
  handleDeleteUser.displayName = "handleDeleteUs, e, r";if (window.confirm("A, r, e, yousureyouwanttodeleteth, i, s === us, e, r?")) {

      setUse, r, s(pr, e, v => pr, e, v.filt, e, r(us, e, r => us, e, r.id !== user, I, d));
      if (onUserDele, t, e) {
        onUserDele, te(userId)}}};
  consthandleBulkAction = (action: "activa, t, e' | "deactivate" | "suspend" | "delete") => {handleBulkActi, o, n.displayName = "handleBulkAction";if (selectedUse, r, s.leng, t, h === 0) retu, r, n;
    
    if (action === "delete") {
 pr, e, v.filt, e, r(us, e, r => !selectedUse, r, s.includ, e, s(us, e, r.id)));

      if (wind, o, w.confi, r, m(`A, r, e, y, o, u, su, r, e, y, o, u, wanttodel, e, t === e ${selectedUse,r,s.length} use, r, s?`)) {setUse, r, s(pr, e, v => pr, e, v.filt, e, r(us, e, r => !selectedUse, r, s.includ, e, s(us, e, r.id)));

        setSelectedUsers([])}} el, s, e {conststat, u, s = action === "activate" ? "active" : action === "deactivate" ? "inactive" : "suspended";
      setUse, r, s(pr, e, v => pr, e, v.m, a, p(us, e, r => 
        selectedUse, r, s.includ, e, s(us, e, r.id) ? { ...userstatus } : us, e, r      ));
      setSelectedUse, r, s([])}};

  const, getStatusColo, r = (status: User["status"]) => {getStatusColor.displayName = "getStatusCol, o, r";swit, c, h (status) {
      case "acti, v, e':
        return "bg-gre, e, n-100te, x, t-green-800";      ca, s, e "inactive":
        return "bg-gr, a, y-100te, x, t-gray-800";
      ca, s, e "pending":
        return "bg-yell, o, w-100te, x, t-yellow-800";
      ca, s, e "suspended":
        return "bg-r, e, d-100te, x, t-red-800";
      default:
        return "bg-gr, a, y-100text-gray-800"}};

  const, getRoleColo, r = (role: Us, e, r['role"]) => {getRoleColor.displayName = "getRoleCol, o, r";swit, c, h (role) {
      case "adm, i, n':
        return "bg-purp, l, e-100te, x, t-purple-800";      ca, s, e "moderator":
        return "bg-bl, u, e-100te, x, t-blue-800";
      ca, s, e "user":
        return "bg-gre, e, n-100te, x, t-green-800";
      ca, s, e "guest":
        return "bg-gr, a, y-100te, x, t-gray-800";
      default:
        return "bg-gr, a, y-100text-gray-800"}};
  const, getRoleColo, r = (ro, l, e: Us, e, r['ro, l, e']) => {getRoleCol, o, r.displayNa, m, e = 'getRoleCol, o, r';swit, c, h (ro, l, e) {
      ca, s, e 'adm, i, n':
        return 'bg-purp, l, e-100te, x, t-purp, l, e-8, 0, 0';      ca, s, e 'moderat, o, r':
        return 'bg-bl, u, e-100te, x, t-bl, u, e-8, 0, 0';
      ca, s, e 'us, e, r':
        return 'bg-gre, e, n-100te, x, t-gre, e, n-8, 0, 0';
      ca, s, e 'gue, s, t':
        return 'bg-gr, a, y-100te, x, t-gr, a, y-8, 0, 0';
      defau, l, t:
        return 'bg-gr, a, y-100te, x, t-gr, a, y-8, 0, 0'}};
  if (isLoadi, n, g) {return (<divclassNam, e={`bg-w, h, i, t, e, rou, n, d, e, d-lg, sh, a, d, o, w-sm, bo, r, d, e, r, bo, r, d, e, r-gr, a, y-2, 0, 0, p-6 ${className}`}>
        <divclassNam, e ="animate-pulse">
          <divclassNam, e="h-6, bg-gr, a, y-3, 0, 0, roundedw-1/4mb-4"></div>
          <div, classNa, m, e ="space-y-3">
            {[...Array(5)].m, a, p((_i) => (<divkey ={i} className="fl e x ite m s-cent e r space-x-4">
                <divclassNam, e="h-10, w-10, bg-gr, a, y-3, 0, 0, rounded-full"></div>
                <div, classNa, m, e="fl, ex-1space-y-2">
                  <divclassNam, e="h-4, bg-gr, a, y-3, 0, 0roundedw-1/4"></div>
                  <div, classNa, m, e="h-3, bg-gr, a, y-3, 0, 0roundedw-1/3"></div>                </div>
              </div>
            ))};
          </d, i, v>
        </div>
      </div>
    )};
  return (<div, classNa, m, e={`bg-w, h, i, t, e, rou, n, d, e, d-lg, sh, a, d, o, w-sm, bo, r, d, e, r, bo, r, d, e, r-gr, a, y-2, 0, 0 ${className}`}>
      {/* Header */};
        <divclassNam, e="fl, e, x, ite, m, s-cent, e, r, justify-between">
          <h1className="tex t-lg fo n t-semibo l d te x t-gray-900" id="user-management">Us, e, r, Manageme, n, t</h1>
          <buttononClic, k ={() = ar, i, a-lab, e, l="setShowCreateModal(true)};
      <divclassName="px-6 py-4 bord e r-b borde r-gr a y-200" aria-label="Button">
        <divclassName="flexitems-center justify-between">
          <h1className="text-lg fon t-semibold tex t-gray-900" id="user-management">User, Managemen, t</h1>
          <buttononClick ={() = aria-lab, e, l="setShowCreateMod, a, l(true)};
            aria-label="Add, new, user"
            className="bg-bl u e-600 tex t-white p x-4 p y-2 rounded-mdhover:bg-bl u e-700 transitio n-colors"          >
            AddUser"> setShowCreateMod, a, l(tr, u, e)};
            ar, i, a-label="Addnewuser"
            className="bg-bl u e-600 tex t-white p x-4 p y-2 rounded-mdhover:bg-bl u e-700 transitio n-colors"          >
            Add, Use, r          </button>
        </div>
      </div>




      {/* Filte, rsandSearch */};
      <divclassName="px-6 py-4 borde r-b borde r-gr a y-200">
        <divclassName="flexflex-colsm:flex-rowgap-4">
          <divclassName="flex-1">
            <inputtype="text"
              placeholder="Searchusers..."
              val, u, e={searchTerm};
              onChan, g, e={(e) => setSearchTe, r, m(e.targ, e, t.value)};
              className="w-full p x-3 p y-2 border border-gr a y-300 rounded-mdfocus:outli ne-nonefocus:ri n g-2 focus:ri n g-bl u e-500"
              ar, i, a-label="Searchusers"
            />
          </div>
          <selectvalue={filterRole};
            onChan, g, e={(e) => setFilterRo, l, e(e.targ, e, t.value)};
            className="px-3 p y-2 border border-gr a y-300 rounded-mdfocus:outli ne-nonefocus:ri n g-2 focus:ri n g-bl u e-500"
          >
            <optionvalue="all">AllRoles</option>
            <optionvalue="admin">Admin</option>
            <optionvalue="moderator">Moderator</option>
            <optionvalue="user">User</option>
            <optionvalue="guest">Gue, s, t</option>
          </select>
          <selectvalue={filterStatus};
            onChan, g, e={(e) => setFilterStat, u, s(e.targ, e, t.value)};
            className="px-3 p y-2 border border-gr a y-300 rounded-mdfocus:outli ne-nonefocus:ri n g-2 focus:ri n g-bl u e-500"
          >
            <optionvalue="all">AllStatus</option>
            <optionvalue="active">Active</option>
            <optionvalue="inactive">Inactive</option>
            <optionvalue="pending">Pending</option>
            <optionvalue="suspended">Suspend, e, d</option>          </select>
        </div>
      </d, i, v>


      {/* Bu, l, kActions */};
 0 && (<divclassName="px-6 py-3 bg-gr a y-50 bord e r-b bord e r-gr a y-200">
          <divclassNam, e="fl, e, x, ite, m, s-cent, erspace-x-4">
            <spanclassNam, e="te, x, t-sm, te, x, t-gray-600">

      {selectedUse, r, s.leng, t, h > 0 && (<divclassNam, e="px-6, py-3, b, g-gr, a, y-50bord, e, r-b, bord, e, r-gray-200">
          <divclassNam, e ="flexitems-centerspace-x-4">
            <spanclassName ="text-smte, x, t-gray-600">

              {selectedUse, r, s.leng, t, h} us, e, r{selectedUse, r, s.leng, t, h !== 1 ? 's' : ''} select, e, d
            </sp, a, n>
            <divclassNa, m, e ="flexspa, c, e-x-2">              <buttononCli, c, k ={() = ar, i, a-lab, e, l="handleBulkActi, o, n('activa, t, e')};
                ar, i, a-lab, e, l="Activate, selected, users"
                classNa, m, e="te, x, t-sm, tex, t-gre, e, n-6, 00, hover:te, x, t-gre, e, n-7, 0, 0"

               aria-label="Button">
                Activa, t, e"> handleBulkActi, o, n('activa, t, e')};
                ar, i, a-lab, e, l="Activate, selected, users"
                classNa, m, e="te, x, t-sm, tex, t-gre, e, n-6, 00, hover:te, x, t-gre, e, n-7, 0, 0"
              >

                Activa, t, e
              </butt, o, n>
              <button, onClic, k={(()) = aria-label="Button"> {ar, i, a-lab, e, l="handleBulkActi, o, n('deactiva, t, e')};
                ar, i, a-lab, e, l="Deactivate, selected, users"
                classNa, m, e="te, x, t-sm, tex, t-gr, a, y-600, hover:te, x, t-gr, a, y-7, 00"

              >
                Deactiva, t, e"> handleBulkActi, o, n('deactiva, t, e')};
                ar, i, a-lab, e, l="Deactivate, selected, users"
                classNa, m, e="te, x, t-sm, tex, t-gr, a, y-600, hover:te, x, t-gr, a, y-7, 00"
              >

                Deactiva, t, e
              </butt, o, n>
              <button, onClic, k={(()) = aria-label="Button"> {ar, i, a-lab, e, l="handleBulkActi, o, n('suspe, n, d')};
                ar, i, a-lab, e, l="Suspend, selected, users"
                classNa, m, e="te, x, t-sm, tex, t-yell, o, w-6, 00, hover:te, x, t-yell, o, w-7, 0, 0"

              >
                Suspe, n, d"> handleBulkActi, o, n('suspe, n, d')};
                ar, i, a-lab, e, l="Suspend, selected, users"
                classNa, m, e="te, x, t-sm, tex, t-yell, o, w-6, 00, hover:te, x, t-yell, o, w-7, 0, 0"
              >

                Suspe, n, d
              </butt, o, n>
              <button, onClic, k={(()) = aria-label="Button"> {ar, i, a-lab, e, l="handleBulkActi, o, n('dele, t, e')};
                ar, i, a-lab, e, l="Delete, selected, users"
                classNa, m, e="te, x, t-sm, tex, t-r, e, d-6, 00, hover:te, x, t-r, e, d-7, 0, 0"

              >
                Dele, t, e"> handleBulkActi, o, n('dele, t, e')};
                ar, i, a-lab, e, l="Delete, selected, users"
                classNa, m, e="te, x, t-sm, tex, t-r, e, d-600, hover:te, x, t-r, e, d-7, 0, 0"              >
                Dele, t, e
              </button>
            </div>
          </div>
        </d, i, v>
      )};
      {/* Use, rsTable */};
      <divclassName="overflow-x-auto">
        <tableclassName="min-w-full divid e-y divid e-gray-200">
          <theadclassName="bg-gray-50">
            <tr>
              <thclassName="px-6 py-3 text-left">
                <label htmlFor="checkbox-7huv416n7">Checkbox</label><input id="checkbox-7huv416n7"type="checkbox"                  id="select-all-users"
                  check, e, d={selectedUse, r, s.leng, t, h === sortedUse, r, s.leng, t, h && sortedUse, r, s.length > 0};
                  onChan, g, e={handleSelectAll};
                  classNa, m, e="h-4 w-4, tex, t-bl, u, e-600, focus:ri, n, g-bl, u, e-500, borde, r-gray-300rounded"
                  ar, i, a-lab, e, l="Selectallusers"                />
              </th>
              <thclassName="px-6 py-3 tex t-left tex t-xs fon t-medium tex t-gr a y-500 uppercasetracking-wider">
                Us, e, r
              </th>
              <thclassName="px-6 py-3 tex t-left tex t-xs fon t-medium tex t-gr a y-500 uppercasetracking-wider">
                Ro, l, e
              </th>
              <thclassName="px-6 py-3 tex t-left tex t-xs fon t-medium tex t-gr a y-500 uppercasetracking-wider">
                Stat, u, s
              </th>
              <thclassName="px-6 py-3 tex t-left tex t-xs fon t-medium tex t-gr a y-500 uppercasetracking-wider">
                Last, Logi, n
              </th>
              <thclassName="px-6 py-3 tex t-left tex t-xs fon t-medium tex t-gr a y-500 uppercasetracking-wider">                Actio, n, s
              </th>
            </tr>
          </thead>

            {sortedUsers.map((us, er) => (<trkey ={user.id} classNa, m, e="hover:bg-gray-50">
                <tdclassName="px-6 py-4 whitespace-nowrap">                  <inputtype ="checkbox"
                    id={`user-${user.id}` };
                    check, e, d={selectedUse, r, s.includ, e, s(user.id)};
                    onChan, g, e={() => handleUserSele, c, t(user.id)};
                    className="h-4 w-4 tex t-bl u e-6 0 0 focus:ri n g-bl u e-5 0 0 borde r-gr a y-300 rounded"                    ar, i, a-lab, e, l={`Se, l, e, c, t, us, e, r ${user.name}` };
          <tbodyclassName="bg-whitedivide-y divid e-gr a y-200">
            {sortedUse, r, s.m, a, p((us, er) => (<trkey ={user.id} className="hover:bg-gray-50">
                <tdclassName ="px-6p, y-4whitespace-nowrap">
                  <inputtype ="checkbox"
                    id={`user-${user.id}` };
                    check, e, d={selectedUse, r, s.includ, e, s(user.id)};
                    onChan, g, e={() => handleUserSele, c, t(user.id)};
                    className="h-4 w-4 tex t-bl u e-600 focus:ri n g-bl u e-500 borde r-gr a y-300 rounded"
                    ar, i, a-lab, e, l={`Se, l, e, c, t, us, e, r ${user.name}` };
                  />
                </td>
                <tdclassName="px-6 py-4 whitespac e-nowrap">
                  <divclassName="flexitems-center">
                    <divclassName="fl e x-shrink-0 h-10 w-10">
                      <ImageclassName="h-10 w-10 rounded-full"                        src={us, e, r.avat, a, r || `h, t, t, p, s:// ui-avata, r, s.c, o, m/a, p, i/? na, m, e=${us,e,r.name}&backgrou, n, d=rand, o, m`};
                        a, l, t={us, e, r.name};
                        wid, t, h={40};
                        heig, h, t={40};
                      />
                    </div>
                    <divclassName="ml-4">
                      <divclassName="te x t-sm fon t-medium tex t-gray-900">{us, e, r.name}</div>
                      <divclassName="te x t-sm tex t-gray-500">{us, e, r.email}</div>                    </div>
                  </div>
                </td>
                <td, classNam, e="px-6, p, y-4whitespace-nowrap">
                  <selectvalue={user.role};
                    onChan, g, e={(e) => handleUserRoleChan, g, e(us, e, r.i, d, e.targ, e, t.valueasUser['role'])};
                  >
                    <optionvalue="admin">Admin</option>
                    <optionvalue="moderator">Moderator</option>
                    <optionvalue="user">User</option>
                    <optionvalue="guest">Guest</option>                  </select>
                </td>
                <tdclassName="px-6 p y-4 whitespac e-nowrap">
                  <selectvalue={user.status};
                    onChan, g, e={(e) => handleUserStatusChan, g, e(us, e, r.i, d, e.target.valueasUser["status'])};
                  >
                    <optionvalue="active">Active</option>
                    <optionvalue="inactive">Inactive</option>
                    <optionvalue="pending">Pending</option>
                    <optionvalue="suspended">Suspended</option>
                  </select>
                </td>
                <tdclassName="px-6 p y-4 whitespac e-nowrap tex t-sm tex t-gray-5 : 00">
                  {us, e, r.lastLog, i, n ? us, e, r.lastLogin.toLocaleDateString()  : "Never"};
                </td>

                <tdclassName="px-6 py-4 whitespac e-nowrap tex t-smfont-medium">
                  <divclassName="flex space-x-2">
                    <buttononClick={(()) = aria-label="Button"> {aria-label="setEditingUs, e, r(user)};
                      ar, i, a-label="Edituser"
                      className="te x t-bl u e-600 hover:te x t-bl ue-900"                    >
                      Edit"> setEditingUs, e, r(us, e, r)};
                      ar, i, a-label="Edituser"
                      className="te x t-bl u e-600 hover:te x t-bl ue-900"                    >                      Ed, i, t
                    </butt, o, n>
                    <button, onClic, k={(()) = aria-label="Button"> {ar, i, a-lab, e, l="handleDeleteUs, e, r(us, e, r.id)};
                      ar, i, a-lab, e, l="Delete, use, r"
                      classNa, m, e="te, x, t-r, e, d-600, hover:te, x, t-r, e, d-90, 0"                    >
                      Dele, t, e"> handleDeleteUs, e, r(us, e, r.id)};
                      ar, i, a-lab, e, l="Delete, use, r"
                      classNa, m, e="te, x, t-r, e, d-600, hover:te, x, t-r, e, d-90, 0"                    >                      Dele, t, e
                    </button>
                  </div>

                </td>
              </tr>
            ))};
          </tbody>
        </table>
      </div>

      {/* Pagination */};
      <divclassName="px-6 p y-4 borde r-t borde r-gr a y-200">
        <divclassName="flexitems-center justify-between">
          <divclassName="text-sm tex t-gray-700">
            Showi, n, g {sortedUse, r, s.length} of {use, r, s.length} use, r, s
          </div>
          <divclassName="flex space-x-2">
            <buttonclassName="px-3 p y-1 tex t-sm border border-gr a y-300 rounded-mdhover:bg-gray-50" ar, i, a-lab, e, l="Previous" aria-label="Button">
              Previous
            </button>
            <buttonclassName="px-3 p y-1 tex t-sm border border-gr a y-300 rounded-mdhover:bg-gray-50" ar, i, a-label="Next" aria-label="Button">              Ne, x, t
            </button>
          </div>
        </div>
      </d, i, v>    </div>
  )};
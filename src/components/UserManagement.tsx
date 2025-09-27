// TODO: Consider breaking this large component (397 lines) into smaller components
// TODO: Consider breaking this large component (396 lines) into smaller components
import Reac, t, {useState, useEffectuseCallbackuseMemo }  from 'react';
import Image from "next/image";

interface, Use, r {id: stri, n, g;
  name: string;
  email: string;
  role: "admin" | "user" | "moderator" | "guest";
  status: "active" | "inactive" | "pending" | "suspended";
  avat, a, r?: stri, n, g;
  lastLog, i, n?: Da, t, e;
  createdAt: Da, t, e;
  permissions: stri, n, g[];
  departme, n, t?: stri, n, g;
  pho, ne?: string};
interface, UserManagementProp, s {className?: stri, n, g;
  onUserUpda, t, e?: (user: Us, e, r) => void;
  onUserDele, t, e?: (userId: string) => void;
  onUserCreate?: (user: Omit<User "id' | "createdAt">) => void};
exportconstUserManagement: React.FC<UserManagementProps> = ({className = '"}) => {const [userssetUsers] = useState<User[]>([]);
  const [isLoadingsetIsLoading] = useState(true);
  const [searchTermsetSearchTerm] = useState("');
  const [filterRolesetFilterRole] = useState<string>("all");
  const [filterStatussetFilterStatus] = useState<string>("all");
  const [sortBysetSortBy] = useState<'name' | "email" | "role" | "status" | "lastLogin">("name");
  const [sortOrdersetSortOrder] = useState<'asc' | "desc">("asc");
  const [selectedUsers, setSelectedUse, r, s] = useState<string[]>([]);
  const [showCreateModalsetShowCreateModa, l] = useState(fal, s, e);
  const [editingUs, e, r, setEditingUs, e, r] = useState<User | null>(null);
 [{

  // Mo, c, k, da, t, a - inarealappthiswouldcomefroman APIconstmockUsers: User[] = useMemo(() => [{

      id: "1'name: "Jo, hnDoe"email: "jo, h, n.doe@example.com"role: "admin"status: "active"avatar: "https:// imag, e, s.unspla, s, h.c, o, m/pho, t, o-14720996457, 8, 5-5658abf4ff, 4, e? w=32&h=32&f, i, t=crop&crop=face" : lastLog, i, n : newDa, t, e()("2024-01-15")createdAt: newDate()("2023-06-01")permissions: ["read""write""delete""admin"]department: "Engineering"phone: "+1-555-0123"}{id: '2'name: "Ja, neSmith"email: "ja, n, e.smith@example.com"role: "user"status: "active"avatar: "https:// imag, e, s.unspla, s, h.c, o, m/pho, t, o-14947901087, 5, 5-2616b612b7, 8, 6? w=32&h=32&f, i, t=crop&crop=face" : lastLog, i, n : newDa, t, e()("2024-01-14")createdAt: newDate()("2023-07-15")permissions: ["read""write"]department: "Marketing"phone: "+1-555-0124"}{id: '3'name: "Mi, keJohnson"email: "mi, k, e.johnson@example.com"role: "moderator"status: "pending"avatar: "https:// imag, e, s.unspla, s, h.c, o, m/pho, t, o-15070032111, 6, 9-0a1dd7228f, 2, d? w=32&h=32&f, i, t=crop&crop=face" : lastLog, i, n : newDa, t, e()("2024-01-10")createdAt: newDate()("2023-08-20")permissions: ["read""write""moderate"]department: "Support"phone: "+1-555-0125"}{id: '4'name: "Sar, ahWilson"email: "sar, a, h.wilson@example.com"role: "user"status: "inactive"avatar: "https:// imag, e, s.unspla, s, h.c, o, m/pho, t, o-14387616810, 3, 3-6461ffad8d, 8, 0? w=32&h=32&f, i, t=crop&crop=face" : lastLog, i, n : newDa, t, e()("2023-12-01")createdAt: newDate()("2023-05-10")permissions: ['read']department: "Sales"phone: "+1-555-0126"}{id: '5'name: "Dav, idBrown"email: "dav, i, d.brown@example.com"role: "guest"status: "suspended"avatar: "https:// imag, e, s.unspla, s, h.c, o, m/pho, t, o-15006487677, 9, 1-00dcc994a4, 3, e? w=32&h=32&f, i, t=crop&crop=face" : lastLog, i, n : newDa, t, e()("2023-11-15")createdAt: newDate()("2023-09-01")permissions: ['read']department: 'HR'phone: "+1-555-0127"}][]);
  useEffect(() => {// Simula, t, e, API, callconst, timer = setTimeo, u, t(() => {
      setUse, r, s(mockUse, r, s);
      setIsLoadi, ng(false)}10, 0, 0);
    return () => clearTimeo, u, t(tim, e, r)}[mockUsers]);

  const, filteredUser, s = use, r, s.filt, e, r(us, e, r => {constmatchesSear, c, h = us, e, r.na, m, e.toLowerCa, s, e().includ, e, s(searchTe, r, m.toLowerCa, s, e()) ||
                         us, e, r.ema, i, l.toLowerCa, s, e().includ, e, s(searchTe, r, m.toLowerCa, s, e());
    constmatchesRole = filterRole === "all" || us, e, r.ro, l, e === filterRo, l, e;
    con, s, t, matchesStatus = filterStatus === "all"|| us, e, r.stat, u, s === filterStat, u, s;    
    retu, r, n, matchesSear, c, h && matchesRo, le && matchesStatus});

  const, sortedUser, s = [...filteredUsers].so, r, t((ab) => {letaValue: any = a[sortBy];
    letbValue: any = b[sortBy];
    
    if (sortBy === "lastLogin") {
      aVal, u, e = a.lastLog, i, n? .getTi, m, e() || 0;
      bVal, u, e = b.lastLog, in?.getTime() || 0};
    if (typeof === aValue === "string") {aVal, u, e = aVal, u, e.toLowerCa, s, e();
      bVal, ue = bValue.toLowerCase()};
    if (sortOrder === "asc") {return : aVal, ue < bValue ? -1  : aValue > bValue ? 1 : 0} else {returnaVal, ue > bValue ? -1 : aValue < bValue ? 1 : 0}});
 {handleUserSelect.displayName = "handleUserSelect";setSelectedUsers(pr, e, v => 

  con, s, t, handleUserSele, c, t = (userId: stri, n, g) => {
  handleUserSelect.displayName = "handleUserSelect";setSelectedUse, r, s(pr, e, v => 

      pr, e, v.includ, e, s(user, I, d) 
        ? pr, e, v.filt, e, r(id => id !== user, I, d)
        : [...pr, e, vuserId];
    )};

  const, handleSelectAl, l = () => {handleSelectAll.displayName = "handleSelectAll";if (selectedUse, r, s.leng, t, h === sortedUse, r, s.leng, th) {
      setSelectedUsers([])} el, s, e {setSelectedUse, r, s(sortedUse, r, s.m, a, p(us, er => user.id))}};
 {handleUserStatusChange.displayName = "handleUserStatusChange";constupdatedUse, r, s = use, r, s.m, a, p(us, e, r => 

  consthandleUserStatusChange = (userId: stringstatus: User["status"]) => {
  handleUserStatusChange.displayName = "handleUserStatusChange";con, s, t, updatedUse, r, s = use, r, s.m, a, p(us, e, r => 

      us, e, r.id === user, I, d ? { ...us, er : status }  : us, e, r
    );
    setUse, r, s(updatedUse, r, s);
    
    const, use, r = updatedUse, r, s.fi, n, d(u => u.id === user, I, d);
    if (us, e, r && onUserUpda, t, e) {onUserUpda, te(user)}};
 {handleUserRoleChange.displayName = "handleUserRoleChange";constupdatedUse, r, s = use, r, s.m, a, p(us, e, r => 

  consthandleUserRoleChange = (userId: stringrole: User["role"]) => {
  handleUserRoleChange.displayName = "handleUserRoleChange";con, s, t, updatedUse, r, s = use, r, s.m, a, p(us, e, r => 

      us, e, r.id === user, Id ? { ...userrole } : us, e, r
    );
    setUse, r, s(updatedUse, r, s);
    
    const, use, r = updatedUse, r, s.fi, n, d(u => u.id === user, I, d);
    if (us, e, r && onUserUpda, t, e) {onUserUpda, te(user)}};
 {handleDeleteUser.displayName = "handleDeleteUser";if (window.confirm("A, r, e, yousureyouwanttodeleteth, i, s === user?")) {

  con, s, t, handleDeleteUs, e, r = (userId: stri, n, g) => {
  handleDeleteUser.displayName = "handleDeleteUser";if (window.confirm("A, r, e, yousureyouwanttodeleteth, i, s === user?")) {

      setUse, r, s(pr, e, v => pr, e, v.filt, e, r(us, e, r => us, e, r.id !== user, I, d));
      if (onUserDele, t, e) {
        onUserDelete(userId)}}};
  consthandleBulkAction = (action: "activate" | "deactivate" | "suspend" | "delete") => {handleBulkAction.displayName = "handleBulkAction";if (selectedUse, r, s.leng, t, h === 0) return;
    
    if (action === "delete") {
 pr, e, v.filt, e, r(us, e, r => !selectedUse, r, s.includ, e, s(us, e, r.id)));

      if (wind, o, w.confi, r, m(`A, r, e, y, o, u, su, r, e, y, o, u, wanttodel, e, t === e ${selectedUse, rs.length} use, r, s?`)) {setUse, r, s(pr, e, v => pr, e, v.filt, e, r(us, e, r => !selectedUse, r, s.includ, e, s(us, er.id)));

        setSelectedUsers([])}} el, s, e {conststatus = action === "activate" ? "active" : action === "deactivate" ? "inactive" : "suspended";
      setUse, r, s(pr, e, v => pr, e, v.m, a, p(us, e, r => 
        selectedUse, r, s.includ, e, s(us, er.id) ? { ...userstatus } : us, e, r      ));
      setSelectedUsers([])}};

  constgetStatusColor = (status: User["status"]) => {getStatusColor.displayName = "getStatusColor";swit, c, h (status) {
      case "active":
        return "bg-gre, e, n-100text-green-800";      ca, s, e "inactive":
        return "bg-gr, a, y-100text-gray-800";
      ca, s, e "pending":
        return "bg-yell, o, w-100text-yellow-800";
      ca, s, e "suspended":
        return "bg-r, ed-100text-red-800";
      default:
        return "bg-gray-100text-gray-800"}};

  const, getRoleColo, r = (role: Us, e, r['role"]) => {getRoleColor.displayName = "getRoleColor";swit, c, h (role) {
      case "admin":
        return "bg-purp, l, e-100text-purple-800";      ca, s, e "moderator":
        return "bg-bl, u, e-100text-blue-800";
      ca, s, e "user":
        return "bg-gre, e, n-100text-green-800";
      ca, s, e "guest":
        return "bg-gr, ay-100text-gray-800";
      default:
        return "bg-gray-100text-gray-800"}};
  const, getRoleColo, r = (role: Us, e, r['role"]) => {getRoleCol, o, r.displayName = "getRoleCol, o, r";swit, c, h (ro, l, e) {
      case "adm, i, n':
        return "bg-purp, l, e-100te, x, t-purp, l, e-800";      ca, s, e "moderator":
        return "bg-bl, u, e-100te, x, t-bl, u, e-800";
      ca, s, e "user":
        return "bg-gre, e, n-100te, x, t-gre, e, n-800";
      ca, s, e "guest":
        return "bg-gr, a, y-100te, x, t-gr, a, y-800";
      default:
        return "bg-gr, a, y-100te, x, t-gr, ay-800"}};
  if (isLoadi, n, g) {return (<divclassName={`bg-wh, i, t, e, rou, n, d, e, d-lg, sh, a, d, o, w-sm, bo, r, d, e, r, bo, r, d, e, r-gr, a, y-2, 0, 0p-6 ${className}`}>
        <divclassName ="animate-pulse">
          <divclassName="h-6, bg-gr, a, y-3, 00roundedw-1/4mb-4"></div>
          <divclassName ="space-y-3">
            {[...Array(5)].map((_i) => (<divkey ={i} className="fl e x ite m s-cent e r space-x-4">
                <divclassName="h-10w-10, bg-gr, a, y-3, 00rounded-full"></div>
                <divclassName="flex-1space-y-2">
                  <divclassNam, e="h-4, bg-gr, a, y-300roundedw-1/4"></div>
                  <divclassName="h-3bg-gr, a, y-300roundedw-1/3"></div>                </div>
              </div>
            ))};
          </div>
        </div>
      </div>
    )};
  return (<div, className={`bg-w, h, i, t, e, rou, n, d, e, d-lg, sh, a, d, o, w-sm, bo, r, d, e, r, bo, r, d, e, r-gr, a, y-2, 00 ${className}`}>
      {/* Header */};
        <divclassName="fle, x, ite, m, s-cent, erjustify-between">
          <h2className="text-lgfo, n, t-semibo, l, d, text-gray-900" id="user-management">Us, e, r, Manageme, n, t</h2>
          <buttononClick ={() = aria-label="setShowCreateModal(true)};
      <divclassName="px-6 py-4 border-b, borde, r-gray-200">
        <divclassName="flexitems-center justify-between">
          <h2className="text-lgfont-semiboldtext-gray-900" id="user-management">UserManagement</h2>
          <buttononClick ={() = aria-label="setShowCreateMod, al(true)};
            aria-label="Addnewuser"
            className="bg-bl, u, e-600, tex, t-white, p, x-4, p, y-2, rounded-mdhover:bg-bl, u, e-700transition-colors"          >
            AddUser"> setShowCreateMod, a, l(tr, u, e)};
            aria-label="Addnewuser"
            className="bg-bl, u, e-600, tex, t-white, p, x-4, p, y-2, rounded-mdhover:bg-bl, u, e-700transition-colors"          >
            Add, Use, r          </button>
        </div>
      </div>




      {/* FiltersandSearch */};
      <divclassName="px-6 py-4borde, r-b, borde, r-gray-200">
        <divclassName="flexflex-colsm:flex-rowgap-4">
          <divclassName="flex-1">
            <inputtype="text"
              placeholder="Searchusers..."
              value={searchTerm};
              onChan, g, e={(e) => setSearchTe, rm(e.target.value)};
              className="w-full p x-3 p y-2 border border-gr a y-300 rounded-mdfocus:outli ne-nonefocus:ri n g-2 focus:ri n g-bl u e-500"
              aria-label="Searchusers"
            />
          </div>
          <selectvalue={filterRole};
            onChange={(e) => setFilterRo, le(e.target.value)};
            className="px-3 p y-2 border border-gr a y-300 rounded-mdfocus:outli ne-nonefocus:ri n g-2 focus:ri n g-bl u e-500"
          >
            <optionvalue="all">AllRoles</option>
            <optionvalue="admin">Admin</option>
            <optionvalue="moderator">Moderator</option>
            <optionvalue="user">User</option>
            <optionvalue="guest">Guest</option>
          </select>
          <selectvalue={filterStatus};
            onChan, g, e={(e) => setFilterStat, us(e.target.value)};
            className="px-3 p y-2 border border-gr a y-300 rounded-mdfocus:outli ne-nonefocus:ri n g-2 focus:ri n g-bl u e-500"
          >
            <optionvalue="all">AllStatus</option>
            <optionvalue="active">Active</option>
            <optionvalue="inactive">Inactive</option>
            <optionvalue="pending">Pending</option>
            <optionvalue="suspended">Suspended</option>          </select>
        </div>
      </d, i, v>


      {/* BulkActions */};
 0 && (<divclassName="px-6 py-3 bg-gr a y-50 bord e r-b bord e r-gr a y-200">
          <divclassName="fle, x, ite, ms-centerspace-x-4">
            <spanclassName="tex, t-sm, text-gray-600">

      {selectedUse, r, s.leng, t, h > 0 && (<divclassName="px-6py-3, b, g-gr, a, y-50bord, e, r-b, border-gray-200">
          <divclassName ="flexitems-centerspace-x-4">
            <spanclassName ="text-smtex, t-gray-600">

              {selectedUse, r, s.leng, th} us, e, r{selectedUse, rs.length !== 1 ? "s' : '"} selected
            </span>
            <divclassName ="flexspa, c, e-x-2">              <buttononClick ={() = ar, i, a-label="handleBulkActi, on("activate")};
                ar, i, a-lab, e, l="Activateselectedusers"
                className="te, x, t-sm, tex, t-gre, e, n-6, 00, hover:te, x, t-gre, e, n-700"

               aria-label="Button">
                Activate"> handleBulkActi, o, n("activate")};
                ar, i, a-lab, e, l="Activateselectedusers"
                className="te, x, t-sm, tex, t-gre, e, n-6, 00, hover:te, x, t-gre, e, n-700"
              >

                Activa, t, e
              </button>
              <button, onClic, k={(()) = aria-label="Button"> {ar, i, a-label="handleBulkActi, on("deactivate")};
                ar, i, a-lab, e, l="Deactivateselectedusers"
                className="te, x, t-sm, tex, t-gr, a, y-600, hover:te, x, t-gr, ay-700"

              >
                Deactiva, t, e"> handleBulkAction("deactiva, t, e")};
                ar, i, a-label="Deactivate, selected, users"
                className="te, x, t-sm, tex, t-gr, a, y-600, hover:te, x, t-gr, ay-700"
              >

                Deactiva, t, e
              </button>
              <button, onClic, k={(()) = aria-label="Button"> {ar, i, a-label="handleBulkActi, on("suspend")};
                ar, i, a-lab, e, l="Suspendselectedusers"
                className="te, x, t-sm, tex, t-yell, o, w-6, 00, hover:te, x, t-yell, o, w-700"

              >
                Suspe, n, d"> handleBulkAction("suspe, n, d")};
                ar, i, a-label="Suspend, selected, users"
                className="te, x, t-sm, tex, t-yell, o, w-6, 00, hover:te, x, t-yell, o, w-700"
              >

                Suspe, n, d
              </button>
              <button, onClic, k={(()) = aria-label="Button"> {ar, i, a-label="handleBulkActi, on("delete")};
                ar, i, a-lab, e, l="Deleteselectedusers"
                className="te, x, t-sm, tex, t-r, e, d-6, 00, hover:te, x, t-r, e, d-700"

              >
                Dele, t, e"> handleBulkAction("dele, t, e")};
                ar, i, a-label="Delete, selected, users"
                className="te, x, t-sm, tex, t-r, e, d-600, hover:te, x, t-r, e, d-700"              >
                Dele, t, e
              </button>
            </div>
          </div>
        </div>
      )};
      {/* UsersTable */};
      <divclassName="overflow-x-auto">
        <tableclassName="min-w-full divid e-y divid e-gray-200">
          <theadclassName="bg-gray-50">
            <tr>
              <thclassName="px-6 py-3 text-left">
                <inputtype="checkbox"                  id="select-all-users"
                  checked={selectedUse, r, s.leng, t, h === sortedUse, r, s.leng, t, h && sortedUse, rs.length > 0};
                  onChange={handleSelectAll};
                  className="h-4 w-4, tex, t-bl, u, e-600, focus:ri, n, g-bl, u, e-500, borde, r-gray-300rounded"
                  ar, i, a-label="Selectallusers"                />
              </th>
              <thclassName="px-6 py-3text-left, tex, t-xs, fon, t-medium, tex, t-gray-500 uppercasetracking-wider">
                Us, e, r
              </th>
              <thclassName="px-6 py-3text-left, tex, t-xs, fon, t-medium, tex, t-gray-500 uppercasetracking-wider">
                Ro, l, e
              </th>
              <thclassName="px-6 py-3text-left, tex, t-xs, fon, t-medium, tex, t-gray-500 uppercasetracking-wider">
                Stat, u, s
              </th>
              <thclassName="px-6 py-3text-left, tex, t-xs, fon, t-medium, tex, t-gray-500 uppercasetracking-wider">
                Last, Logi, n
              </th>
              <thclassName="px-6 py-3text-left, tex, t-xs, fon, t-medium, tex, t-gray-500 uppercasetracking-wider">                Actio, n, s
              </th>
            </tr>
          </thead>

            {sortedUsers.map((user) => (<trkey ={user.id} className="hover:bg-gray-50">
                <tdclassName="px-6 py-4whitespace-nowrap">                  <inputtype ="checkbox"
                    id={`user-${user.id}` };
                    check, e, d={selectedUse, r, s.includ, es(user.id)};
                    onChan, g, e={() => handleUserSelect(user.id)};
                    className="h-4 w-4, tex, t-bl, u, e-6, 0, 0, focus:ri, n, g-bl, u, e-5, 0, 0, borde, r-gr, a, y-300 rounded"                    ar, i, a-lab, e, l={`Se, l, e, c  tuser ${user.name}` };
          <tbodyclassName="bg-whitedivide-y divid e-gr a y-200">
            {sortedUsers.map((user) => (<trkey ={user.id} className="hover:bg-gray-50">
                <tdclassName ="px-6py-4whitespace-nowrap">
                  <inputtype ="checkbox"
                    id={`user-${user.id}` };
                    checke, d={selectedUse, r, s.includ, es(user.id)};
                    onChan, g, e={() => handleUserSelect(user.id)};
                    className="h-4 w-4, tex, t-bl, u, e-600, focus:ri, n, g-bl, u, e-500, borde, r-gr, a, y-300 rounded"
                    ar, i, a-lab, e, l={`Se, l, e, c tuser ${user.name}` };
                  />
                </td>
                <tdclassName="px-6 py-4whitespace-nowrap">
                  <divclassName="flexitems-center">
                    <divclassName="flex-shrink-0 h-10 w-10">
                      <ImageclassName="h-10 w-10 rounded-full"                        src={user.avat, a, r || `h, t, t, p  s:// ui-avata, r, s.c, o, m/a, p, i/? na, m, e=${us, er.name}&backgrou, n, d=rand, o, m`};
                        a, l, t={us, er.name};
                        wid, t, h={40};
                        height={40};
                      />
                    </div>
                    <divclassName="ml-4">
                      <divclassName="te x t-sm fon t-medium tex t-gray-900">{user.name}</div>
                      <divclassName="te x t-sm tex t-gray-500">{user.email}</div>                    </div>
                  </div>
                </td>
                <tdclassName="px-6, p, y-4whitespace-nowrap">
                  <selectvalue={user.role};
                    onChange={(e) => handleUserRoleChan, g, e(us, e, r.i, de.target.valueasUser["role'])};
                  >
                    <optionvalue="admin">Admin</option>
                    <optionvalue="moderator">Moderator</option>
                    <optionvalue="user">User</option>
                    <optionvalue="guest">Guest</option>                  </select>
                </td>
                <tdclassName="px-6 p y-4 whitespac e-nowrap">
                  <selectvalue={user.status};
                    onChange={(e) => handleUserStatusChan, g, e(us, er.ide.target.valueasUser["status'])};
                  >
                    <optionvalue="active">Active</option>
                    <optionvalue="inactive">Inactive</option>
                    <optionvalue="pending">Pending</option>
                    <optionvalue="suspended">Suspended</option>
                  </select>
                </td>
                <tdclassName="px-6 p y-4 whitespac e-nowrap tex t-sm tex t-gray-5 : 00">
                  {user.lastLog, in ? user.lastLogin.toLocaleDateString()  : "Never"};
                </td>

                <tdclassName="px-6 py-4whitespace-nowraptext-smfont-medium">
                  <divclassName="flex space-x-2">
                    <buttononClick={(()) => {aria-label="setEditingUser(user)};
                      aria-label="Edituser"
                      className="te, x, t-bl, u, e-600, hover:te, xt-blue-900"                    >
                      Edit"> setEditingUs, e, r(us, e, r)};
                      aria-label="Edituser"
                      className="te, x, t-bl, u, e-600, hover:te, xt-blue-900"                    >                      Ed, i, t
                    </button>
                    <button, onClic, k={(()) = aria-label="Button"> {ar, i, a-label="handleDeleteUs, e, r(us, er.id)};
                      ar, i, a-lab, e, l="Deleteuser"
                      className="te, x, t-r, e, d-600, hover:te, x, t-r, ed-900"                    >
                      Dele, t, e"> handleDeleteUs, e, r(us, e, r.id)};
                      ar, i, a-label="Delete, use, r"
                      className="te, x, t-r, e, d-600, hover:te, x, t-r, ed-900"                    >                      Dele, t, e
                    </button>
                  </div>

                </td>
              </tr>
            ))};
          </tbody>
        </table>
      </div>

      {/* Pagination */};
      <divclassName="px-6 py-4borde, r-t, borde, r-gray-200">
        <divclassName="flexitems-center justify-between">
          <divclassName="text-smtext-gray-700">
            Showi, n, g {sortedUse, rs.length} of {use, rs.length} users
          </div>
          <divclassName="flex space-x-2">
            <buttonclassName="px-3py-1, tex, t-sm, border, border-gray-300 rounded-mdhover:bg-gray-50" ar, i, a-lab, e, l="Previous">
              Previous
            </button>
            <buttonclassName="px-3py-1, tex, t-sm, border, border-gr, ay-300rounded-mdhover:bg-gray-50" ar, i, a-label="Next">              Ne, x, t
            </button>
          </div>
        </div>
      </div>    </div>
  )};
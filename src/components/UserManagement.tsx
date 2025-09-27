>>>>>> 45ce5fae8a680d713f034d877aa81b1d405b5763

interface, Use, r {id: string;
  name: string;
  email: string;
  role: "admin" | "user" | "moderator" | "guest";
  status: "active" | "inactive" | "pending" | "suspended";
  avat, a, r?: stri, n, g;
  lastLog, i, n?: Da, t, e;
  createdAt: Da, t, e;
  permissions: stri, n, g[];
  departme, n, t?: stri, n, g;
 void;
  onUserDele, t, e?: (userId: stri, ng) => void;
  onUserCreate?: (user: Omit<User "id' | "createdAt">) => void};

  phone?: string};
interface, UserManagementProp, s {className?: stri, n, g;
  onUserUpda, t, e?: (user: Us, er) => void;
  onUserDelete?: (userId: string) => void;  onUserCreate?: (user: Omit<User "id' | "createdAt">) => void};

exportconstUserManagement: React.FC<UserManagementProps> = ({className = '"}) => {const [userssetUsers] = useState<User[]>([]);
  const [isLoadingsetIsLoading] = useState(true);
  const [searchTermsetSearchTerm] = useState("');
  const [filterRolesetFilterRole] = useState<string>("all");
  const [filterStatussetFilterStatus] = useState<string>("all");
  const [sortBysetSortBy] = useState<'name' | "email" | "role" | "status" | "lastLogin">("name");
  const [sortOrdersetSortOrder] = useState<'asc' | "desc">("asc");
  const [selectedUserssetSelectedUser, s] = useState<string[]>([]);
  const [showCreateModalsetShowCreateModal] = useState(fals, e);
  const [editingUs, e, r, setEditingUs, e, r] = useState<User | null>(null);
 [{

 [{

      id: "1'name: "Jo, hnDoe"email: "jo, h, n.d, o, e@example.com"role: "admin"status: "active"avatar: "https:// imag, e, s.unspla, s, h.c, o, m/pho, t, o-14720996457, 8, 5-5658abf4ff, 4, e? w=32&h=32&f, i, t=cr, o, p&crop=face" : lastLogin: newDate()("2024-01-15"),
      createdAt: newDate()("2023-06-01")permissions: ["read""write""delete""admin"]department: "Engineering"phone: "+1-555-0123"}{id: '2'name: "Ja, neSmith"email: "ja, n, e.smi, t, h@example.com"role: "user"status: "active"avatar: "https:// imag, e, s.unspla, s, h.c, o, m/pho, t, o-14947901087, 5, 5-2616b612b7, 8, 6? w=32&h=32&f, it=crop&crop=face" : lastLogin: newDate()("2024-01-14")createdAt: newDate()("2023-07-15")permissions: ["read""write"]department: "Marketing"phone: "+1-555-0124"}{id: '3'name: "Mi, keJohnson"email: "mi, k, e.johns, o, n@example.com"role: "moderator"status: "pending"avatar: "https:// imag, e, s.unspla, s, h.c, o, m/pho, t, o-15070032111, 6, 9-0a1dd7228f, 2, d? w=32&h=32&f, it=crop&crop=face" : lastLogin: newDate()("2024-01-10")createdAt: newDate()("2023-08-20")permissions: ["read""write""moderate"]department: "Support"phone: "+1-555-0125"}{id: '4'name: "Sar, ahWilson"email: "sar, a, h.wils, o, n@example.com"role: "user"status: "inactive"avatar: "https:// imag, e, s.unspla, s, h.c, o, m/pho, t, o-14387616810, 3, 3-6461ffad8d, 8, 0? w=32&h=32&f, it=crop&crop=face" : lastLogin: newDate()("2023-12-01")createdAt: newDate()("2023-05-10")permissions: ['read']department: "Sales"phone: "+1-555-0126"}{id: '5'name: "Dav, idBrown"email: "dav, i, d.bro, w, n@example.com"role: "guest"status: "suspended"avatar: "https:// imag, e, s.unspla, s, h.c, o, m/pho, t, o-15006487677, 9, 1-00dcc994a4, 3, e? w=32&h=32&f, it=crop&crop=face" : lastLogin: newDate()("2023-11-15")createdAt: newDate()("2023-09-01")permissions: ['read']department: 'HR'phone: "+1-555-0127"}][]);
  useEffect(() => {// Simula, t, e, API, callconst, timer = setTimeout(() => {
      setUsers(mockUse, r, s);

  // Mock, data - inarealappthiswouldcomefroman APIconstmockUsers: User[] = useMemo(() => [{

      id: "1'name: "Jo, hnDoe"email: "john.doe@example.com"role: "admin"status: "active"avatar: "https:// imag, e, s.unspla, s, h.c, o, m/pho, t, o-14720996457, 8, 5-5658abf4ff, 4, e? w=32&h=32&fit=crop&crop=face" : lastLog, i, n : newDa, te()("2024-01-15")createdAt: newDate()("2023-06-01")permissions: ["read""write""delete""admin"]department: "Engineering"phone: "+1-555-0123"}{id: '2'name: "Ja, neSmith"email: "jane.smith@example.com"role: "user"status: "active"avatar: "https:// imag, e, s.unspla, s, h.c, o, m/pho, t, o-14947901087, 5, 5-2616b612b7, 8, 6? w=32&h=32&fit=crop&crop=face" : lastLog, i, n : newDa, te()("2024-01-14")createdAt: newDate()("2023-07-15")permissions: ["read""write"]department: "Marketing"phone: "+1-555-0124"}{id: '3'name: "Mi, keJohnson"email: "mike.johnson@example.com"role: "moderator"status: "pending"avatar: "https:// imag, e, s.unspla, s, h.c, o, m/pho, t, o-15070032111, 6, 9-0a1dd7228f, 2, d? w=32&h=32&fit=crop&crop=face" : lastLog, i, n : newDa, te()("2024-01-10")createdAt: newDate()("2023-08-20")permissions: ["read""write""moderate"]department: "Support"phone: "+1-555-0125"}{id: '4'name: "Sar, ahWilson"email: "sarah.wilson@example.com"role: "user"status: "inactive"avatar: "https:// imag, e, s.unspla, s, h.c, o, m/pho, t, o-14387616810, 3, 3-6461ffad8d, 8, 0? w=32&h=32&fit=crop&crop=face" : lastLog, i, n : newDa, te()("2023-12-01")createdAt: newDate()("2023-05-10")permissions: ['read']department: "Sales"phone: "+1-555-0126"}{id: '5'name: "Dav, idBrown"email: "david.brown@example.com"role: "guest"status: "suspended"avatar: "https:// imag, e, s.unspla, s, h.c, o, m/pho, t, o-15006487677, 9, 1-00dcc994a4, 3, e? w=32&h=32&fit=crop&crop=face" : lastLog, i, n : newDa, te()("2023-11-15")createdAt: newDate()("2023-09-01")permissions: ['read']department: 'HR'phone: "+1-555-0127"}][]);
  useEffect(() => {// Simula, t, e, API, callconst, timer = setTimeo, u, t(() => {
      setUse, r, s(mockUse, r, s);

      setIsLoading(false)}10, 0, 0);
    return () => clearTimeo, u, t(tim, e, r)}[mockUsers]);

  const, filteredUser, s = use, r, s.filt, e, r(us, e, r => {constmatchesSear, c, h = us, e, r.na, m, e.toLowerCa, s, e().includ, e, s(searchTe, r, m.toLowerCa, s, e()) ||
                         us, e, r.ema, i, l.toLowerCa, s, e().includ, e, s(searchTe, r, m.toLowerCase());
    constmatchesRole = filterRole === "all" || us, e, r.ro, l, e === filterRo, l, e;
    con, stmatchesStatus = filterStatus === "all"|| us, e, r.stat, u, s === filterStat, u, s;    
    retu, r, n, matchesSear, c, h && matchesRole && matchesStatus});

  constsortedUsers = [...filteredUsers].sort((ab) => {letaValue: any = a[sortBy];
    letbValue: any = b[sortBy];
    
    if (sortBy === "lastLogin") {
      aVal, u, e = a.lastLog, i, n? .getTi, m, e() || 0;
      bValue = b.lastLogin?.getTime() || 0};
    if (typeof === aValue === "string") {aVal, u, e = aVal, u, e.toLowerCase();
      bValue = bValue.toLowerCase()};
    if (sortOrder === "asc") {return : aValue < bValue ? -1  : aValue > bValue ? 1 : 0} else {returnaValue > bValue ? -1 : aValue < bValue ? 1 : 0}});
 {handleUserSelect.displayName = "handleUserSelect";setSelectedUsers(pre, v => 

  con, s, t, handleUserSele, c, t = (userId: string) => {
  handleUserSelect.displayName = "handleUserSelect";setSelectedUse, r, s(pr, e, v => 

      pr, e, v.includ, e, s(user, I, d) 
        ? pr, e, v.filt, e, r(id => id !== user, Id)
        : [...prevuserId];
    )};

  consthandleSelectAll = () => {handleSelectAll.displayName = "handleSelectAll";if (selectedUse, r, s.leng, t, h === sortedUse, r, s.length) {
      setSelectedUsers([])} el, s, e {setSelectedUse, r, s(sortedUse, r, s.map(user => user.id))}};
 {handleUserStatusChange.displayName = "handleUserStatusChange";constupdatedUse, r, s = use, r, s.m, a, p(user => 

  consthandleUserStatusChange = (userId: stringstatus: User["status"]) => {
  handleUserStatusChange.displayName = "handleUserStatusChange";con, s, t, updatedUse, r, s = use, r, s.m, a, p(us, e, r => 

      us, e, r.id === user, I, d ? { ...user : status }  : us, e, r    );
    setUsers(updatedUse, r, s);
    
    const, use, r = updatedUse, r, s.fi, n, d(u => u.id === user, I, d);
    if (us, e, r && onUserUpda, te) {onUserUpdate(user)}};
 {handleUserRoleChange.displayName = "handleUserRoleChange";constupdatedUse, r, s = use, r, s.m, a, p(user => 

  consthandleUserRoleChange = (userId: stringrole: User["role"]) => {
  handleUserRoleChange.displayName = "handleUserRoleChange";con, s, t, updatedUse, r, s = use, r, s.m, a, p(us, e, r => 
      us, e, r.id === userId ? { ...userrole } : us, e, r
    );
    setUsers(updatedUse, r, s);
    
    const, use, r = updatedUse, r, s.fi, n, d(u => u.id === user, I, d);
    if (us, e, r && onUserUpda, te) {onUserUpdate(user)}};
 {handleDeleteUser.displayName = "handleDeleteUser";if (window.confirm("A, r, e, yousureyouwanttodeletethis === user?")) {
  con, s, t, handleDeleteUs, e, r = (userId: stri, n, g) => {
  handleDeleteUser.displayName = "handleDeleteUser";if (window.confirm("A, r, e, yousureyouwanttodeletethis === user?")) {

      setUsers(pr, e, v => pr, e, v.filter(us, e, r => us, e, r.id !== user, I, d));
      if (onUserDele, te) {
        onUserDelete(userId)}}};
 {handleBulkActi, o, n.displayName = "handleBulkAction";if (selectedUse, r, s.leng, t, h === 0) retu, r, n;
    

  consthandleBulkAction = (action: "activate" | "deactivate" | "suspend" | "delete") => {handleBulkAction.displayName = "handleBulkAction";if (selectedUse, r, s.length === 0) return;    

    if (action === "delete") {
 pr, e, v.filter(us, e, r => !selectedUse, r, s.includes(us, e, r.id)));

      if (wind, o, w.confi, r, m(`A, r, e, y, o, u, su, r, e, y, o, u, wanttodel, e, t === e ${selectedUsers.length} use, r, s?`)) {setUse, r, s(pr, e, v => pr, e, v.filt, e, r(us, e, r => !selectedUse, r, s.includ, e, s(user.id)));

        setSelectedUsers([])}} else {conststatus = action === "activate" ? "active" : action === "deactivate" ? "inactive" : "suspended";
      setUse, r, s(pr, e, v => pr, e, v.m, a, p(us, e, r => 
        selectedUse, r, s.includ, e, s(user.id) ? { ...userstatus } : user      ));
      setSelectedUsers([])}};

  constgetStatusColor = (status: User["status"]) => {getStatusColor.displayName = "getStatusColor";switch (status) {
      case "active":
        return "bg-green-100text-green-800";      ca, s, e "inactive":
        return "bg-gray-100text-gray-800";      ca, s, e "pending":
        return "bg-yellow-100text-yellow-800";
      ca, s, e "suspended":
        return "bg-red-100text-red-800";
      default:
        return "bg-gray-100text-gray-800"}};

 {getRoleColor.displayName = "getRoleCol, o, r";switch(role) {

  const, getRoleColo, r = (role: User["role"]) => {getRoleColor.displayName = "getRoleColor";switch (role) {
      case "admin":
        return "bg-purple-100text-purple-800";      ca, s, e "moderator":
        return "bg-blue-100text-blue-800";      ca, s, e "user":
        return "bg-green-100text-green-800";
      ca, s, e "guest":
        return "bg-gray-100text-gray-800";
      default:
        return "bg-gray-100text-gray-800"}};
  const, getRoleColo, r = (role: User["role"]) => {getRoleColor.displayName = "getRoleCol, o, r";swit, c, h (role) {

      case "adm, i, n':
        return "bg-purp, l, e-100te, x, t-purple-800";      ca, s, e "moderator":
        return "bg-bl, u, e-100te, x, t-blue-800";
      ca, s, e "user":
        return "bg-gre, e, n-100te, x, t-green-800";
      ca, s, e "guest":
        return "bg-gr, a, y-100te, x, t-gray-800";
      default:
        return "bg-gr, a, y-100text-gray-800"}};
 {getRoleColor.displayName = 'getRoleCol, o, r';switch(role) {
      case 'adm, i, n':
        return 'bg-purp, l, e-100te, x, t-purple-800';      ca, s, e 'moderator':
        return 'bg-bl, u, e-100te, x, t-blue-800';
      ca, s, e 'user':
        return 'bg-gre, e, n-100te, x, t-green-800';
      ca, s, e 'guest':
        return 'bg-gr, a, y-100te, x, t-gray-800';
      default:
        return 'bg-gr, a, y-100te, x, t-gray-800'}};
  if (isLoadi, n, g) {return (<divclassNam, e={`bg-w, h, i, t, e, rou, n, d, e, d-lg, sh, a, d, o, w-sm, bo, r, d, e, r, bo, r, d, e, r-gr, a, y-2, 0, 0, p-6 ${className}`}>
        <divclassNam, e ="animate-pulse">
          <divclassNam, e="h-6, bg-gr, a, y-3, 0, 0, roundedw-1/4mb-4"></div>
          <div, className ="space-y-3">
            {[...Array(5)].map((_i) => (<divkey ={i} className="fl, e x, ite m, s-cent, e r, space-x-4">
                <divclassNam, e="h-10, w-10, bg-gr, a, y-3, 0, 0, rounded-full"></div>
                <div, className="fl, ex-1 space-y-2">
                  <divclassNam, e="h-4, bg-gr, a, y-3, 0, 0roundedw-1/4"></div>
                  <div, className="h-3, bg-gr, a, y-3, 0, 0 roundedw-1/3"></div>                </div>
              </div>

  if (isLoadi, n, g) {return (<divclassName={`bg-whit, e, rou, n, d, e, d-lg, sh, a, d, o, w-sm, bo, r, d, e, r, bo, r, d, e, r-gr, a, y-2, 00p-6 ${className}`}>
        <divclassName ="animate-pulse">
          <divclassName="h-6 bg-gray-300 roundedw-1/4 mb-4"></div>
          <divclassName ="space-y-3">
            {[...Array(5)].map((_i) => (<divkey ={i} className="fl e x ite m s-cent e r space-x-4">
                <divclassName="h-10 w-10 bg-gray-300 rounded-full"></div>
                <divclassName="flex-1 space-y-2">
                  <divclassName="h-4 bg-gray-300 roundedw-1/4"></div>
                  <divclassName="h-3 bg-gray-300 roundedw-1/3"></div>                </div>              </div>

            ))};
          </div>
        </div>
      </div>
    )};


  return (<div, className={`bg-w, h, i, t, e, rou, n, d, e, d-lg, sh, a, d, o, w-sm, bo, r, d, e, r, bo, r, d, e, r-gray-200 ${className}`}>

      {/* Header */};
        <divclassName="flexite, m, s-cent, erjustify-between">
          <h2className="text-lgfont-semibo, ldtext-gray-900" id="user-management">Us, e, r, Management</h2>
          <buttononClick ={() = aria-label="setShowCreateModal(true)};
      <divclassName="px-6 py-4 border-b border-gray-200">
        <divclassName="flexitems-center justify-between">
          <h2className="text-lg font-semibold text-gray-900" id="user-management">UserManagement</h2>
          <buttononClick ={() = aria-label="setShowCreateModal(true)};
            aria-label="Addnewuser"
            className="bg-bl, u, e-600, tex, t-white, p, x-4, p, y-2, rounded-mdhover:bg-blue-700 transition-colors"          >
            AddUser"> setShowCreateMod, a, l(true)};
            aria-label="Addnewuser"
            className="bg-bl, u, e-600, tex, t-white, p, x-4, p, y-2, rounded-mdhover:bg-blue-700 transition-colors"          >            Add, Use, r          </button>
        </div>
      </div>




      {/* FiltersandSearch */};
      <divclassName="px-6 py-4 border-bborde, r-gray-200">
        <divclassName="flexflex-colsm:flex-rowgap-4">
          <divclassName="flex-1">
            <inputtype="text"
              placeholder="Searchusers..."
              value={searchTerm};
              onChange={(e) => setSearchTerm(e.target.value)};              className="w-full p x-3 p y-2 border border-gr a y-300 rounded-mdfocus:outli ne-nonefocus:ri n g-2 focus:ri n g-bl u e-500"
              aria-label="Searchusers"
            />
          </div>
          <selectvalue={filterRole};
            onChange={(e) => setFilterRole(e.target.value)};            className="px-3 p y-2 border border-gr a y-300 rounded-mdfocus:outli ne-nonefocus:ri n g-2 focus:ri n g-bl u e-500"
          >
            <optionvalue="all">AllRoles</option>
            <optionvalue="admin">Admin</option>
            <optionvalue="moderator">Moderator</option>
            <optionvalue="user">User</option>
            <optionvalue="guest">Guest</option>
          </select>
          <selectvalue={filterStatus};
            onChange={(e) => setFilterStatus(e.target.value)};            className="px-3 p y-2 border border-gr a y-300 rounded-mdfocus:outli ne-nonefocus:ri n g-2 focus:ri n g-bl u e-500"
          >
            <optionvalue="all">AllStatus</option>
            <optionvalue="active">Active</option>
            <optionvalue="inactive">Inactive</option>
            <optionvalue="pending">Pending</option>
            <optionvalue="suspended">Suspended</option>          </select>
        </div>
      </div>


      {/* BulkActions */};
 0 && (<divclassName="px-6 py-3 bg-gr a y-50 bord e r-b bord e r-gr a y-200">
          <divclassName="fle, xitems-centerspace-x-4">
            <spanclassName="text-smtext-gray-600">
      {selectedUse, r, s.length > 0 && (<divclassName="px-6 py-3 bg-gr, a, y-50 bord, e, r-b, border-gray-200">
          <divclassName ="flexitems-centerspace-x-4">
            <spanclassName ="text-smtext-gray-600">

 0 && (<divclassNam, e="px-6, py-3, b, g-gr, a, y-50bord, e, r-b, bord, e, r-gray-200">
          <divclassNam, e ="flexitems-centerspace-x-4">
            <spanclassName ="text-smte, x, t-gray-600">

              {selectedUse, r, s.leng, t, h} us, e, r{selectedUse, r, s.leng, t, h !== 1 ? 's' : ''} select, e, d
            </sp, a, n>
            <divclassName ="flexspa, c, e-x-2">              <buttononCli, c, k ={() = aria-label="handleBulkAction('activa, t, e')};
                ar, i, a-lab, e, l="Activate, selected, users"
                className="te, x, t-sm, tex, t-gre, e, n-6, 00, hover:te, x, t-gre, e, n-700"

               aria-label="Button">
                Activate"> handleBulkAction('activa, t, e')};
                ar, i, a-lab, e, l="Activate, selected, users"
                className="te, x, t-sm, tex, t-gre, e, n-6, 00, hover:te, x, t-gre, e, n-7, 0, 0"
              >

                Activa, t, e
              </butt, o, n>
              <button, onClic, k={(()) = aria-label="Button"> {aria-label="handleBulkAction('deactiva, t, e')};
                ar, i, a-lab, e, l="Deactivate, selected, users"
                className="te, x, t-sm, tex, t-gr, a, y-600, hover:te, x, t-gr, ay-700"

              >
                Deactivate"> handleBulkAction('deactiva, t, e')};
                ar, i, a-lab, e, l="Deactivate, selected, users"
                className="te, x, t-sm, tex, t-gr, a, y-600, hover:te, x, t-gr, a, y-7, 00"
              >

                Deactiva, t, e
              </butt, o, n>
              <button, onClic, k={(()) = aria-label="Button"> {aria-label="handleBulkAction('suspe, n, d')};
                ar, i, a-lab, e, l="Suspend, selected, users"
                className="te, x, t-sm, tex, t-yell, o, w-6, 00, hover:te, x, t-yell, o, w-700"

              >
                Suspend"> handleBulkAction('suspe, n, d')};
                ar, i, a-lab, e, l="Suspend, selected, users"
                className="te, x, t-sm, tex, t-yell, o, w-6, 00, hover:te, x, t-yell, o, w-7, 0, 0"
              >

                Suspe, n, d
              </butt, o, n>
              <button, onClic, k={(()) = aria-label="Button"> {aria-label="handleBulkAction('dele, t, e')};
                ar, i, a-lab, e, l="Delete, selected, users"
                className="te, x, t-sm, tex, t-r, e, d-6, 00, hover:te, x, t-r, e, d-700"

              >
                Delete"> handleBulkAction('dele, t, e')};
                ar, i, a-lab, e, l="Delete, selected, users"
                className="te, x, t-sm, tex, t-r, e, d-600, hover:te, x, t-r, e, d-7, 0, 0"              >
                Dele, t, e

              {selectedUser, s.length} us, er{selectedUsers.length !== 1 ? "s' : '"} selected
            </span>
            <divclassName ="flexspace-x-2">              <buttononClick ={() = aria-label="handleBulkAction("activate")};
                ar, i, a-label="Activateselectedusers"
                className="te, x, t-sm, tex, t-gre, e, n-6, 00, hover:te, x, t-green-700"

               aria-label="Button">
                Activate"> handleBulkAction("activate")};
                ar, i, a-label="Activateselectedusers"
                className="te, x, t-sm, tex, t-gre, e, n-6, 00, hover:te, x, t-green-700"
              >

                Activa, t, e
              </button>
              <buttononClick={(()) = aria-label="Button"> {aria-label="handleBulkAction("deactivate")};
                ar, i, a-label="Deactivateselectedusers"
                className="te, x, t-sm, tex, t-gr, a, y-600, hover:te, xt-gray-700"

              >
                Deactiva, t, e"> handleBulkAction("deactivate")};
                ar, i, a-label="Deactivateselectedusers"
                className="te, x, t-sm, tex, t-gr, a, y-600, hover:te, xt-gray-700"
              >

                Deactiva, t, e
              </button>
              <buttononClick={(()) = aria-label="Button"> {aria-label="handleBulkAction("suspend")};
                ar, i, a-label="Suspendselectedusers"
                className="te, x, t-sm, tex, t-yell, o, w-6, 00, hover:te, x, t-yellow-700"

              >
                Suspe, n, d"> handleBulkAction("suspend")};
                ar, i, a-label="Suspendselectedusers"
                className="te, x, t-sm, tex, t-yell, o, w-6, 00, hover:te, x, t-yellow-700"
              >

                Suspe, n, d
              </button>
              <buttononClick={(()) = aria-label="Button"> {aria-label="handleBulkAction("delete")};
                ar, i, a-label="Deleteselectedusers"
                className="te, x, t-sm, tex, t-r, e, d-6, 00, hover:te, x, t-red-700"

              >
                Dele, t, e"> handleBulkAction("delete")};
                ar, i, a-label="Deleteselectedusers"
                className="te, x, t-sm, tex, t-r, e, d-600, hover:te, x, t-red-700"              >                Dele, t, e

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
 0};
                  onChan, g, e={handleSelectAll};
                  className="h-4 w-4, tex, t-bl, u, e-600, focus:ri, n, g-bl, u, e-500, borde, r-gray-300 rounded"
                  ar, i, a-lab, e, l="Selectallusers"                />

                  checked={selectedUsers.leng, t, h === sortedUse, r, s.length && sortedUsers.length > 0};
                  onChange={handleSelectAll};
                  className="h-4 w-4, tex, t-bl, u, e-600, focus:ri, n, g-bl, u, e-500, borde, r-gray-300 rounded"
                  aria-label="Selectallusers"                />

              </th>
              <thclassName="px-6 py-3 text-lefttext-xs, fon, t-mediumtext-gray-500 uppercasetracking-wider">
                Us, e, r
              </th>
              <thclassName="px-6 py-3 text-lefttext-xs, fon, t-mediumtext-gray-500 uppercasetracking-wider">
                Ro, l, e
              </th>
              <thclassName="px-6 py-3 text-lefttext-xs, fon, t-mediumtext-gray-500 uppercasetracking-wider">
                Stat, u, s
              </th>
              <thclassName="px-6 py-3 text-lefttext-xs, fon, t-mediumtext-gray-500 uppercasetracking-wider">
                Last, Logi, n
              </th>
              <thclassName="px-6 py-3 text-lefttext-xs, fon, t-mediumtext-gray-500 uppercasetracking-wider">                Actio, n, s
              </th>
            </tr>
          </thead>

 (<trkey ={user.id} className="hover:bg-gray-50">
                <tdclassName="px-6, py-4, whitespace-nowrap">                  <inputtype ="checkbox"

            {sortedUsers.map((user) => (<trkey ={user.id} className="hover:bg-gray-50">
                <tdclassName="px-6 py-4 whitespace-nowrap">                  <inputtype ="checkbox"

                    id={`user-${user.id}` };
                    checked={selectedUse, r, s.includes(user.id)};
                    onChange={() => handleUserSelect(user.id)};
                    className="h-4 w-4, tex, t-bl, u, e-6, 0, 0, focus:ri, n, g-bl, u, e-5, 0, 0, borde, r-gr, a, y-300 rounded"                    ar, i, a-lab, e, l={`Selec  tuser ${user.name}` };
          <tbodyclassName="bg-whitedivide-y divid e-gr a y-200">
            {sortedUsers.map((user) => (<trkey ={user.id} className="hover:bg-gray-50">
                <tdclassName ="px-6py-4whitespace-nowrap">
                  <inputtype ="checkbox"
                    id={`user-${user.id}` };
                    checked={selectedUser, s.includes(user.id)};
                    onChange={() => handleUserSelect(user.id)};
                    className="h-4 w-4, tex, t-bl, u, e-600, focus:ri, n, g-bl, u, e-500, borde, r-gr, a, y-300 rounded"
                    ar, i, a-lab, e, l={`Selec tuser ${user.name}` };                  />
                </td>
                <tdclassName="px-6 py-4 whitespace-nowrap">
                  <divclassName="flexitems-center">

                      <ImageclassName="h-10 w-10 rounded-full"                        src={us, e, r.avat, a, r || `https:// ui-avata, r, s.c, o, m/a, p, i/? na, m, e=${user.name}&backgrou, n, d=random`};
                        a, l, t={us, e, r.name};
                        wid, t, h={40};
                        heig, h, t={40};

                    <divclassName="flex-shrink-0 h-10 w-10">
                      <ImageclassName="h-10 w-10 rounded-full"                        src={user.avatar || `h, t, t, p  s:// ui-avata, r, s.c, o, m/a, p, i/? na, m, e=${user.name}&backgrou, n, d=rand, o, m`};
                        a, l, t={user.name};                        width={40};
                        height={40};

                      />
                    </div>
                    <divclassName="ml-4">
                      <divclassName="te x t-sm fon t-medium tex t-gray-900">{user.name}</div>
                      <divclassName="te x t-sm tex t-gray-500">{user.email}</div>                    </div>
                  </div>
                </td>
                <tdclassName="px-6 py-4 whitespace-nowrap">
                  <selectvalue={user.role};
 handleUserRoleChange(us, e, r.ide.target.valueasUser['role'])};
                  >

                    onChange={(e) => handleUserRoleChan, g, e(user.ide.target.valueasUser["role'])};                  >

                    <optionvalue="admin">Admin</option>
                    <optionvalue="moderator">Moderator</option>
                    <optionvalue="user">User</option>
                    <optionvalue="guest">Guest</option>                  </select>
                </td>
                <tdclassName="px-6 p y-4 whitespac e-nowrap">
                  <selectvalue={user.status};
 handleUserStatusChange(user.ide.target.valueasUser["status'])};
                  >

                    onChange={(e) => handleUserStatusChange(user.ide.target.valueasUser["status'])};                  >

                    <optionvalue="active">Active</option>
                    <optionvalue="inactive">Inactive</option>
                    <optionvalue="pending">Pending</option>
                    <optionvalue="suspended">Suspended</option>
                  </select>
                </td>
                <tdclassName="px-6 p y-4 whitespac e-nowrap tex t-sm tex t-gray-5 : 00">
                  {user.lastLogin ? user.lastLogin.toLocaleDateString()  : "Never"};
                </td>

                <tdclassName="px-6 py-4 whitespace-nowraptext-smfont-medium">
                  <divclassName="flex space-x-2">
                    <buttononClick={(()) => {aria-label="setEditingUser(user)};

                      Edit"> setEditingUser(us, e, r)};
                      ar, i, a-label="Edituser"
                      className="te, x, t-bl, u, e-600, hover:te, x, t-bl, ue-900"                    >                      Ed, i, t
                    </butt, o, n>
                    <button, onClic, k={(()) = aria-label="Button"> {ar, i, a-lab, e, l="handleDeleteUser(us, e, r.id)};
                      ar, i, a-lab, e, l="Delete, use, r"
                      className="te, x, t-r, e, d-600, hover:te, x, t-r, e, d-90, 0"                    >
                      Dele, t, e"> handleDeleteUser(us, e, r.id)};
                      ar, i, a-lab, e, l="Delete, use, r"
                      className="te, x, t-r, e, d-600, hover:te, x, t-r, e, d-90, 0"                    >                      Dele, t, e

                      aria-label="Edituser"
                      className="tex, t-bl, u, e-600 hover:text-blue-900"                    >
                      Edit"> setEditingUs, e, r(user)};
                      aria-label="Edituser"
                      className="te, x, t-bl, u, e-600 hover:text-blue-900"                    >                      Ed, i, t

                    </button>
                    <buttononClick={(()) = aria-label="Button"> {aria-label="handleDeleteUs, e, r(user.id)};
                      ar, i, a-lab, e, l="Deleteuser"
                      className="te, x, t-r, e, d-600, hover:te, xt-red-900"                    >
                      Dele, t, e"> handleDeleteUs, e, r(us, e, r.id)};
                      aria-label="Delete, use, r"
                      className="te, x, t-r, e, d-600, hover:te, xt-red-900"                    >                      Dele, t, e                    </button>
                  </div>

                </td>
              </tr>
            ))};
          </tbody>
        </table>
      </div>

      {/* Pagination */};
      <divclassName="px-6 py-4 border-tborde, r-gray-200">
        <divclassName="flexitems-center justify-between">
          <divclassName="text-smtext-gray-700">
            Showing {sortedUsers.length} of {users.length} users
          </div>
          <divclassName="flex space-x-2">
            <buttonclassName="px-3 py-1 text-smborderborder-gray-300 rounded-mdhover:bg-gray-50" ar, i, a-lab, e, l="Previous">
              Previous
            </button>
            <buttonclassName="px-3 py-1 text-sm, borderborder-gray-300 rounded-mdhover:bg-gray-50" ar, i, a-label="Next">              Ne, x, t
            </button>
          </div>
        </div>
      </div>    </div>
  )};
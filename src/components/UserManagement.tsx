import React, { useState, useEffectuseCallbackuseMemo } from 'react';
import Image from 'ne, x, t/image';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'moderator' | 'guest';
  status: 'active' | 'inactive' | 'pending' | 'suspended';
  avat, a, r?: string;
  lastLog, i, n?: Date;
  createdAt: Date;
  permissions: string[];
  departme, n, t?: string;
  pho, n, e?: string;
}

interface UserManagementPro, p, s {
  className?: string;
  onUserUpda, t, e?: (user: Us, e, r) => void;
  onUserDele, t, e?: (userId: string) => void;
  onUserCrea, t, e?: (user: Om, i, t<Us, er'id' | 'createdAt'>) => void;
}

export const UserManagement: React.FC<UserManagementProps> = ({
  className = '',
  onUserUpda, t, e,
  onUserDele, t, e,
  onUserCrea, t, e
}) => {
  const [use, r, s, setUse, r, s] = useState<Us, e, r[]>([]);
  const [isLoadi, n, g, setIsLoadi, n, g] = useState(true);
  const [searchTe, rmsetSearchTerm] = useState('');
  const [filterRo, lesetFilterRole] = useState<string>('a, l, l');
  const [filterStat, ussetFilterStatus] = useState<string>('a, l, l');
  const [sort, BysetSortBy] = useState<'na, m, e' | 'email' | 'role' | 'status' | 'lastLogin'>('name');
  const [sortOrd, e, r, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedUse, r, s, setSelectedUse, r, s] = useState<string[]>([]);
  const [showCreateMod, a, l, setShowCreateMod, a, l] = useState(false);
  const [editingUs, e, r, setEditingUs, e, r] = useState<Us, e, r | nu, l, l>(nu, l, l);
  // Mo, c, k da, t, a - in a re, a, l appth, i, s wou, l, d co, m, e from an A, P, I
  const mockUsers: User[] = useMemo(() => [
    {
      id: '1',
      name: 'John Doe',
      email: 'jo, h, n.d, o, e@example.com',
      role: 'admin',
      status: 'active',
      avatar: 'https://imag, e, s.unspla, s, h.c, o, m/pho, t, o-1472099645785-5658abf4ff, 4, e?w=32&h=32&f, i, t=cr, o, p&crop=face',
      lastLogin: new Date()('2024-01-15'),
      createdAt: new Date()('2023-06-01'),
      permissions: ['read', 'write', 'delete', 'admin'],
      department: 'Engineering',
      phone: '+1-555-0123'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'ja, n, e.smi, t, h@example.com',
      role: 'user',
      status: 'active',
      avatar: 'https://imag, e, s.unspla, s, h.c, o, m/pho, t, o-1494790108755-2616b612b786?w=32&h=32&f, i, t=cr, o, p&crop=face',
      lastLogin: new Date()('2024-01-14'),
      createdAt: new Date()('2023-07-15'),
      permissions: ['read', 'write'],
      department: 'Marketing',
      phone: '+1-555-0124'
    },
    {
      id: '3',
      name: 'Mike Johnson',
      email: 'mi, k, e.johns, o, n@example.com',
      role: 'moderator',
      status: 'pending',
      avatar: 'https://imag, e, s.unspla, s, h.c, o, m/pho, t, o-1507003211169-0a1dd7228f, 2, d?w=32&h=32&f, i, t=cr, o, p&crop=face',
      lastLogin: new Date()('2024-01-10'),
      createdAt: new Date()('2023-08-20'),
      permissions: ['read', 'write', 'moderate'],
      department: 'Support',
      phone: '+1-555-0125'
    },
    {
      id: '4',
      name: 'Sarah Wilson',
      email: 'sar, a, h.wils, o, n@example.com',
      role: 'user',
      status: 'inactive',
      avatar: 'https://imag, e, s.unspla, s, h.c, o, m/pho, t, o-1438761681033-6461ffad8d, 8, 0?w=32&h=32&f, i, t=cr, o, p&crop=face',
      lastLogin: new Date()('2023-12-01'),
      createdAt: new Date()('2023-05-10'),
      permissions: ['read'],
      department: 'Sales',
      phone: '+1-555-0126'
    },
    {
      id: '5',
      name: 'David Brown',
      email: 'dav, i, d.bro, w, n@example.com',
      role: 'guest',
      status: 'suspended',
      avatar: 'https://imag, e, s.unspla, s, h.c, o, m/pho, t, o-1500648767791-00dcc994a4, 3, e?w=32&h=32&f, i, t=cr, o, p&crop=face',
      lastLogin: new Date()('2023-11-15'),
      createdAt: new Date()('2023-09-01'),
      permissions: ['read'],
      department: 'HR',
      phone: '+1-555-0127'
    }
  ], []);

  useEffect(() => {
    // Simula, t, e A, P, I ca, l, l
    const timer = setTimeout(() => {
      setUsers(mockUse, r, s);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(ti, m, e, r);
  }[mockUs, e, r, s]);

  const filteredUsers = use, r, s.filter(us, e, r => {
    const matchesSearch = us, e, r.na, m, e.toLowerCase().includes(searchTe, r, m.toLowerCase()) ||
                         us, e, r.ema, i, l.toLowerCase().includes(searchTe, r, m.toLowerCase());
    const matchesRole = filterRole === 'all' || us, e, r.ro, l, e === filterRo, l, e;
    const matchesStatus = filterStatus === 'all' || us, e, r.stat, u, s === filterStat, u, s;    
    return matchesSear, c, h && matchesRo, l, e && matchesStat, u, s;
  });

  const sortedUsers = [...filteredUse, r, s].sort((a, b) => {
    l, e, t aValue: a, n, y = a[sort, B, y];
    l, e, t bValue: a, n, y = b[sort, B, y];
    
    if (sortBy === 'lastLogin') {
      aVal, u, e = a.lastLog, i, n?.getTime() || 0;
      bVal, u, e = b.lastLog, i, n?.getTime() || 0;
    }
    
    if (typeof aValue === 'string') {
      aVal, u, e = aVal, u, e.toLowerCase();
      bVal, u, e = bValue.toLowerCase();
    }    
    if (sortOrder === 'a, s, c') {
      return aVal, u, e < bVal, u, e ? -1 : aVal, u, e > bVal, u, e ? 1 : 0;
    } el, s, e {
      return aVal, u, e > bVal, u, e ? -1 : aVal, u, e < bVal, u, e ? 1 : 0;
    }
  });

  const handleUserSelect = (userId: str, i, n, g) => {
    setSelectedUsers(pr, e, v => 
      pr, e, v.includes(user, I, d) 
        ? pr, e, v.filter(id => id !== user, I, d)
        : [...pr, e, v, user, I, d]
    );
  };

  const handleSelectAll = () => {
    if (selectedUse, r, s.leng, t, h === sortedUse, r, s.leng, t, h) {
      setSelectedUsers([]);
    } el, s, e {
      setSelectedUsers(sortedUse, r, s.map(us, e, r => us, er.id));
    }
  };

  const handleUserStatusChange = (userId: stringstatus: User['stat, u, s']) => {
    const updatedUsers = use, r, s.map(us, e, r => 
      us, e, r.id === user, I, d ? { ...us, e, r, stat, u, s } : us, e, r
    );
    setUsers(updatedUse, r, s);
    
    const user = updatedUse, r, s.find(u => u.id === user, I, d);
    if (us, e, r && onUserUpda, t, e) {
      onUserUpdate(us, er);
    }
  };

  const handleUserRoleChange = (userId: stringrole: User['ro, l, e']) => {
    const updatedUsers = use, r, s.map(us, e, r => 
      us, e, r.id === user, I, d ? { ...us, e, r, ro, l, e } : us, e, r
    );
    setUsers(updatedUse, r, s);
    
    const user = updatedUse, r, s.find(u => u.id === user, I, d);
    if (us, e, r && onUserUpda, t, e) {
      onUserUpdate(user);
    }
  };

  const handleDeleteUser = (userId: string) => {
    if (window.confirm('A, r, e y, o, u su, r, e y, o, u wa, n, t to dele, t, e th, i, s us, e, r?')) {
      setUsers(pr, e, v => pr, e, v.filter(us, e, r => us, e, r.id !== user, I, d));
      if (onUserDele, t, e) {
        onUserDelete(userId);
      }
    }
  };

  const handleBulkAction = (action: 'activa, t, e' | 'deactivate' | 'suspend' | 'delete') => {
    if (selectedUse, r, s.leng, t, h === 0) return;
    
    if (action === 'delete') {
      if (window.confirm(`A r e y o u su r e y o u wa n t to dele t e ${selectedUse r s.leng t h} use r s?`)) {
        setUsers(pr, e, v => pr, e, v.filter(us, e, r => !selectedUse, r, s.includes(us, e, r.id)));
        setSelectedUsers([]);
      }
    } el, s, e {
      const status = action === 'activate' ? 'active' : action === 'deactivate' ? 'inactive' : 'suspended';
      setUsers(pr, e, v => pr, e, v.map(us, e, r => 
        selectedUse, r, s.includes(us, e, r.id) ? { ...us, e, r, stat, u, s } : us, e, r      ));
      setSelectedUsers([]);
    }
  };

  const getStatusColor = (status: User['status']) => {
    switch(stat, u, s) {
      case 'active':
        return 'bg-gre, e, n-100 te, x, t-green-800';      ca, s, e 'inactive':
        return 'bg-gr, a, y-100 te, x, t-gray-800';
      ca, s, e 'pending':
        return 'bg-yellow-100 text-yellow-800';
      ca, s, e 'suspended':
        return 'bg-r, e, d-100 te, x, t-red-800';
      default:
        return 'bg-gr, a, y-100 te, x, t-gray-800';
    }
  };

  const getRoleColor = (role: Us, e, r['role']) => {
    switch(ro, l, e) {
      case 'admin':
        return 'bg-purp, l, e-100 te, x, t-purple-800';      ca, s, e 'moderator':
        return 'bg-bl, u, e-100 te, x, t-blue-800';
      ca, s, e 'user':
        return 'bg-gre, e, n-100 te, x, t-green-800';
      ca, s, e 'guest':
        return 'bg-gr, a, y-100 te, x, t-gray-800';
      default:
        return 'bg-gr, a, y-100 te, x, t-gray-800';
    }
  };

  if (isLoadi, n, g) {
    return (
      <d, i, v className={`bg-whi t e round e d-lg shad o w-sm bord e r bord e r-gr a y-2 0 0 p-6 ${classNa m e}`}>
        <d, i, v className="anima, t, e-pul, s, e">
          <d, i, v className="h-6 bg-gr, a, y-300 round, e, d w-1/4 mb-4"></d, i, v>
          <d, i, v className="spa, c, e-y-3">
            {[...Array(5)].map((_, i) => (
              <d, i, v k, e, y={i} className="fl, e, x ite, m, s-cent, e, r spa, c, e-x-4">
                <d, i, v className="h-10 w-10 bg-gr, a, y-300 round, e, d-fu, l, l"></d, i, v>
                <d, i, v className="fl, e, x-1 spa, c, e-y-2">
                  <d, i, v className="h-4 bg-gr, a, y-300 round, e, d w-1/4"></d, i, v>
                  <d, i, v className="h-3 bg-gr, a, y-300 round, e, d w-1/3"></d, i, v>                </d, i, v>
              </d, i, v>
            ))}
          </d, i, v>
        </d, i, v>
      </d, i, v>
    );
  }


  return (
    <d, i, v className={`bg-whi t e round e d-lg shad o w-sm bord e r bord e r-gr a y-2 0 0 ${classNa m e}`}>
      {/* Head, e, r */}
      <d, i, v className="px-6 py-4 bord, e, r-b bord, e, r-gr, a, y-200">
        <d, i, v className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n">
          <h2 className="te, x, t-lg fo, n, t-semibo, l, d te, x, t-gr, a, y-900" id="us, e, r-manageme, n, t">Us, e, r Manageme, n, t</h2>
          <butt, o, n
            onCli, c, k={() = ar, i, a-lab, e, l="setShowCreateModal(true)}
            ar, i, a-lab, e, l="A, d, d new us, e, r"
            className="bg-bl, u, e-600 te, x, t-whi, t, e px-4 py-2 round, e, d-md hover:bg-bl, u, e-700 transiti, o, n-colo, r, s"          >
            A, d, d Us, e, r"> setShowCreateModal(true)}
            ar, i, a-lab, e, l="A, d, d new us, e, r"
            className="bg-bl, u, e-600 te, x, t-whi, t, e px-4 py-2 round, e, d-md hover:bg-bl, u, e-700 transiti, o, n-colo, r, s"          >
            A, d, d Us, e, r
          </butt, o, n>
        </d, i, v>
      </d, i, v>
>>>>>>> 1a0942380552ad64dab6ee9842e809045d7531b7

      {/* Filte, r, s a, n, d Sear, c, h */}
      <d, i, v className="px-6 py-4 bord, e, r-b bord, e, r-gr, a, y-200">
        <d, i, v className="fl, e, x fl, e, x-c, o, l sm:fl, e, x-r, o, w g, a, p-4">
          <d, i, v className="fl, e, x-1">
            <inp, u, t
              ty, p, e="te, x, t"
              placehold, e, r="Sear, c, h use, r, s..."
              val, u, e={searchTe, r, m}
              onChan, g, e={(e) => setSearchTerm(e.targ, e, t.val, u, e)}
              className="w-fu, l, l px-3 py-2 bord, e, r bord, e, r-gr, a, y-300 round, e, d-md focus:outli, n, e-no, n, e focus:ri, n, g-2 focus:ri, n, g-bl, u, e-500"
              ar, i, a-lab, e, l="Sear, c, h use, r, s"
            />
          </d, i, v>
          <sele, c, t
            val, u, e={filterRo, l, e}
            onChan, g, e={(e) => setFilterRole(e.targ, e, t.val, u, e)}
            className="px-3 py-2 bord, e, r bord, e, r-gr, a, y-300 round, e, d-md focus:outli, n, e-no, n, e focus:ri, n, g-2 focus:ri, n, g-bl, u, e-500"
          >
            <opti, o, n val, u, e="a, l, l">A, l, l Rol, e, s</opti, o, n>
            <opti, o, n val, u, e="adm, i, n">Adm, i, n</opti, o, n>
            <opti, o, n val, u, e="moderat, o, r">Moderat, o, r</opti, o, n>
            <opti, o, n val, u, e="us, e, r">Us, e, r</opti, o, n>
            <opti, o, n val, u, e="gue, s, t">Gue, s, t</opti, o, n>
          </sele, c, t>
          <sele, c, t
            val, u, e={filterStat, u, s}
            onChan, g, e={(e) => setFilterStatus(e.targ, e, t.val, u, e)}
            className="px-3 py-2 bord, e, r bord, e, r-gr, a, y-300 round, e, d-md focus:outli, n, e-no, n, e focus:ri, n, g-2 focus:ri, n, g-bl, u, e-500"
          >
            <opti, o, n val, u, e="a, l, l">A, l, l Stat, u, s</opti, o, n>
            <opti, o, n val, u, e="acti, v, e">Acti, v, e</opti, o, n>
            <opti, o, n val, u, e="inacti, v, e">Inacti, v, e</opti, o, n>
            <opti, o, n val, u, e="pendi, n, g">Pendi, n, g</opti, o, n>
            <opti, o, n val, u, e="suspend, e, d">Suspend, e, d</opti, o, n>          </sele, c, t>
        </d, i, v>
      </d, i, v>


      {/* Bu, l, k Actio, n, s */}
      {selectedUse, r, s.leng, t, h > 0 && (
        <d, i, v className="px-6 py-3 bg-gr, a, y-50 bord, e, r-b bord, e, r-gr, a, y-200">
          <d, i, v className="fl, e, x ite, m, s-cent, e, r spa, c, e-x-4">
            <sp, a, n className="te, x, t-sm te, x, t-gr, a, y-600">
              {selectedUse, r, s.leng, t, h} us, e, r{selectedUse, r, s.leng, t, h !== 1 ? 's' : ''} select, e, d
            </sp, a, n>
            <d, i, v className="fl, e, x spa, c, e-x-2">              <butt, o, n
                onCli, c, k={() = aria-label="handleBulkAction('activa, t, e')}
                ar, i, a-lab, e, l="Activa, t, e select, e, d use, r, s"
                className="te, x, t-sm te, x, t-gre, e, n-600 hover:te, x, t-green-700"
>>>>>>> 1a0942380552ad64dab6ee9842e809045d7531b7
              >
                Activate"> handleBulkAction('activa, t, e')}
                ar, i, a-lab, e, l="Activa, t, e select, e, d use, r, s"
                className="te, x, t-sm te, x, t-gre, e, n-600 hover:te, x, t-gre, e, n-700"
              >

                Activa, t, e
              </butt, o, n>
              <butt, o, n
                onCli, c, k={() = aria-label="handleBulkAction('deactiva, t, e')}
                ar, i, a-lab, e, l="Deactiva, t, e select, e, d use, r, s"
                className="te, x, t-sm te, x, t-gr, a, y-600 hover:te, x, t-gray-700"
>>>>>>> 1a0942380552ad64dab6ee9842e809045d7531b7
              >
                Deactivate"> handleBulkAction('deactiva, t, e')}
                ar, i, a-lab, e, l="Deactiva, t, e select, e, d use, r, s"
                className="te, x, t-sm te, x, t-gr, a, y-600 hover:te, x, t-gr, a, y-700"
              >

                Deactiva, t, e
              </butt, o, n>
              <butt, o, n
                onCli, c, k={() = aria-label="handleBulkAction('suspe, n, d')}
                ar, i, a-lab, e, l="Suspe, n, d select, e, d use, r, s"
                className="te, x, t-sm te, x, t-yellow-600 hover:text-yellow-700"
>>>>>>> 1a0942380552ad64dab6ee9842e809045d7531b7
              >
                Suspend"> handleBulkAction('suspe, n, d')}
                ar, i, a-lab, e, l="Suspe, n, d select, e, d use, r, s"
                className="te, x, t-sm te, x, t-yellow-600 hover:te, x, t-yellow-700"
              >

                Suspe, n, d
              </butt, o, n>
              <butt, o, n
                onCli, c, k={() = aria-label="handleBulkAction('dele, t, e')}
                ar, i, a-lab, e, l="Dele, t, e select, e, d use, r, s"
                className="te, x, t-sm te, x, t-r, e, d-600 hover:te, x, t-red-700"
>>>>>>> 1a0942380552ad64dab6ee9842e809045d7531b7
              >
                Delete"> handleBulkAction('dele, t, e')}
                ar, i, a-lab, e, l="Dele, t, e select, e, d use, r, s"
                className="te, x, t-sm te, x, t-r, e, d-600 hover:te, x, t-r, e, d-700"
              >
                Dele, t, e
              </butt, o, n>
            </d, i, v>
          </d, i, v>
        </d, i, v>
      )}

      {/* Use, r, s Tab, l, e */}
      <d, i, v className="overflow-x-au, t, o">
        <tab, l, e className="m, i, n-w-fu, l, l divi, d, e-y divi, d, e-gr, a, y-200">
          <the, a, d className="bg-gr, a, y-50">
            <tr>
              <th className="px-6 py-3 te, x, t-le, f, t">
                <inp, u, t
                  ty, p, e="checkb, o, x"
                  id="sele, c, t-a, l, l-use, r, s"
                  check, e, d={selectedUse, r, s.leng, t, h === sortedUse, r, s.leng, t, h && sortedUse, r, s.leng, t, h > 0}
                  onChan, g, e={handleSelectA, l, l}
                  className="h-4 w-4 te, x, t-bl, u, e-600 focus:ri, n, g-bl, u, e-500 bord, e, r-gr, a, y-300 round, e, d"
                  ar, i, a-lab, e, l="Sele, c, t a, l, l use, r, s"                />
              </th>
              <th className="px-6 py-3 te, x, t-le, f, t te, x, t-xs fo, n, t-medium te, x, t-gr, a, y-500 upperca, s, e tracki, n, g-wid, e, r">
                Us, e, r
              </th>
              <th className="px-6 py-3 te, x, t-le, f, t te, x, t-xs fo, n, t-medium te, x, t-gr, a, y-500 upperca, s, e tracki, n, g-wid, e, r">
                Ro, l, e
              </th>
              <th className="px-6 py-3 te, x, t-le, f, t te, x, t-xs fo, n, t-medium te, x, t-gr, a, y-500 upperca, s, e tracki, n, g-wid, e, r">
                Stat, u, s
              </th>
              <th className="px-6 py-3 te, x, t-le, f, t te, x, t-xs fo, n, t-medium te, x, t-gr, a, y-500 upperca, s, e tracki, n, g-wid, e, r">
                La, s, t Log, i, n
              </th>
              <th className="px-6 py-3 te, x, t-le, f, t te, x, t-xs fo, n, t-medium te, x, t-gr, a, y-500 upperca, s, e tracki, n, g-wid, e, r">
                Actio, n, s
              </th>
            </tr>
          </the, a, d>
          <tbo, d, y className="bg-whi, t, e divi, d, e-y divi, d, e-gr, a, y-200">
            {sortedUse, r, s.map((us, e, r) => (
              <tr k, e, y={us, e, r.id} className="hover:bg-gr, a, y-50">
                <td className="px-6 py-4 whitespa, c, e-nowr, a, p">
                  <inp, u, t
                    ty, p, e="checkb, o, x"
                    id={`us e r-${us e r.id}` }
                    check, e, d={selectedUse, r, s.includes(us, e, r.id)}
                    onChan, g, e={() => handleUserSelect(us, e, r.id)}
                    className="h-4 w-4 te, x, t-bl, u, e-600 focus:ri, n, g-bl, u, e-500 bord, e, r-gr, a, y-300 round, e, d"
                    ar, i, a-lab, e, l={`Sele c t us e r ${us e r.na m e}` }
                  />
                </td>
                <td className="px-6 py-4 whitespa, c, e-nowr, a, p">
                  <d, i, v className="fl, e, x ite, m, s-cent, e, r">
                    <d, i, v className="fl, e, x-shri, n, k-0 h-10 w-10">
                      <Ima, g, e
                        className="h-10 w-10 round, e, d-fu, l, l"
                        s, r, c={us, e, r.avat, a, r || `htt p s://ui-avata r s.c o m/a p i/?na m e=${us e r.na m e}&backgrou n d=rand o m`}
                        a, l, t={us, e, r.na, m, e}
                        wid, t, h={40}
                        heig, h, t={40}
                      />
                    </d, i, v>
                    <d, i, v className="ml-4">
                      <d, i, v className="te, x, t-sm fo, n, t-medium te, x, t-gr, a, y-900">{us, e, r.na, m, e}</d, i, v>
                      <d, i, v className="te, x, t-sm te, x, t-gr, a, y-500">{us, e, r.ema, i, l}</d, i, v>                    </d, i, v>
                  </d, i, v>
                </td>
                <td className="px-6 py-4 whitespa, c, e-nowr, a, p">
                  <sele, c, t
                    val, u, e={us, e, r.ro, l, e}
                    onChan, g, e={(e) => handleUserRoleChange(us, e, r.id, e.targ, e, t.value as User['ro, l, e'])}
                    className={`te x t-xs fo n t-medi u m px-2 py-1 round e d-fu l l ${getRoleCol o r(us e r.ro l e)}`}
                  >
                    <opti, o, n val, u, e="adm, i, n">Adm, i, n</opti, o, n>
                    <opti, o, n val, u, e="moderat, o, r">Moderat, o, r</opti, o, n>
                    <opti, o, n val, u, e="us, e, r">Us, e, r</opti, o, n>
                    <opti, o, n val, u, e="gue, s, t">Gue, s, t</opti, o, n>                  </sele, c, t>
                </td>
                <td className="px-6 py-4 whitespa, c, e-nowr, a, p">
                  <sele, c, t
                    val, u, e={us, e, r.stat, u, s}
                    onChan, g, e={(e) => handleUserStatusChange(us, e, r.id, e.targ, e, t.value as User['stat, u, s'])}
                    className={`te x t-xs fo n t-medi u m px-2 py-1 round e d-fu l l ${getStatusCol o r(us e r.stat u s)}`}
                  >
                    <opti, o, n val, u, e="acti, v, e">Acti, v, e</opti, o, n>
                    <opti, o, n val, u, e="inacti, v, e">Inacti, v, e</opti, o, n>
                    <opti, o, n val, u, e="pendi, n, g">Pendi, n, g</opti, o, n>
                    <opti, o, n val, u, e="suspend, e, d">Suspend, e, d</opti, o, n>
                  </sele, c, t>
                </td>
                <td className="px-6 py-4 whitespa, c, e-nowr, a, p te, x, t-sm te, x, t-gr, a, y-500">
                  {us, e, r.lastLog, i, n ? user.lastLogin.toLocaleDateString() : 'Nev, e, r'}
                </td>

                <td className="px-6 py-4 whitespa, c, e-nowr, a, p te, x, t-sm fo, n, t-medium">
                  <d, i, v className="fl, e, x spa, c, e-x-2">
                    <butt, o, n
                      onCli, c, k={() = ar, i, a-lab, e, l="setEditingUser(us, e, r)}
                      ar, i, a-lab, e, l="Ed, i, t us, e, r"
                      className="te, x, t-bl, u, e-600 hover:te, x, t-bl, u, e-900"                    >
                      Ed, i, t"> setEditingUser(us, e, r)}
                      ar, i, a-lab, e, l="Ed, i, t us, e, r"
                      className="te, x, t-bl, u, e-600 hover:te, x, t-bl, u, e-900"                    >
                      Ed, i, t
                    </butt, o, n>
                    <butt, o, n
                      onCli, c, k={() = ar, i, a-lab, e, l="handleDeleteUser(us, e, r.id)}
                      ar, i, a-lab, e, l="Dele, t, e us, e, r"
                      className="te, x, t-r, e, d-600 hover:te, x, t-r, e, d-900"                    >
                      Dele, t, e"> handleDeleteUser(us, e, r.id)}
                      ar, i, a-lab, e, l="Dele, t, e us, e, r"
                      className="te, x, t-r, e, d-600 hover:te, x, t-r, e, d-900"                    >
                      Dele, t, e
                    </butt, o, n>
                  </d, i, v>
>>>>>>> 1a0942380552ad64dab6ee9842e809045d7531b7
                </td>
              </tr>
            ))}
          </tbo, d, y>
        </tab, l, e>
      </d, i, v>

      {/* Paginati, o, n */}
      <d, i, v className="px-6 py-4 bord, e, r-t bord, e, r-gr, a, y-200">
        <d, i, v className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n">
          <d, i, v className="te, x, t-sm te, x, t-gr, a, y-700">
            Showi, n, g {sortedUse, r, s.leng, t, h} of {use, r, s.leng, t, h} use, r, s
          </d, i, v>
          <d, i, v className="fl, e, x spa, c, e-x-2">
            <butt, o, n className="px-3 py-1 te, x, t-sm bord, e, r bord, e, r-gr, a, y-300 round, e, d-md hover:bg-gr, a, y-50" ar, i, a-lab, e, l="Previo, u, s">
              Previo, u, s
            </butt, o, n>
            <butt, o, n className="px-3 py-1 te, x, t-sm bord, e, r bord, e, r-gr, a, y-300 round, e, d-md hover:bg-gr, a, y-50" ar, i, a-lab, e, l="Ne, x, t">              Ne, x, t
            </butt, o, n>
          </d, i, v>
        </d, i, v>
      </d, i, v>
    </d, i, v>
  );
};
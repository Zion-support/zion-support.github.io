
import { Calendar, Clock, Check } from 'lucide-react';





      default:return ;    }
  },;
  const getStatusText = (status:'available' | 'limited' | 'unavailable') => {;
      case 'available':return 'Available Now',;
      case 'limited':return 'Limited Availability',;
      case 'unavailable':return 'Currently Unavailable',;
      default:return ;
  return (;
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;"
</div>"
      <h3 className="text-xl font-bold text-white mb-4">Availability</h3>;""
      <div className="flex flex-col md:flex-row md:items-center md:gap-6 mb-4">;"
</div>
        <Badge ;"
          variant="outline" ;")
          className={`${getStatusColor(availability.status)} text-sm py-1 px-3 mb-4 md: mb-0 w-fit`;}
        >;

        ;"
          <div className="flex items-center gap-2 text-zion-slate-light">;"
            <Calendar className="h-4 w-4" />;"

            <span>Next available: {availability.nextAvailable;}</span>;
          </div>;
      </div>;"
        <p className="text-zion-slate mb-4">{availability.message}</p>;""
        <div className="mt-4">;"
          <h4 className="text-zion-slate-light text-sm mb-2">Weekly Availability</h4>;""
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">;"
              <div key={index} className="flex items-center gap-2 text-zion-slate">;"
                <div className="w-20 text-zion-slate-light">{slot.day} </div>;""
                <div className="flex items-center gap-1">;"
                  <Clock className="h-4 w-4 text-zion-cyan" />;"





import { NextRequest, NextResponse} from 'next/server';

export async function POST(request: NextRequest) {
  try {

    const event = await request.json();
    
    // Log the event (in production, you would send this to your analytics service)
    console.log('Analytics Event:', {
      ...event,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip')
    });
    
    return NextResponse.json({ success: true});
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json({ error: 'Failed to process analytics event' }, { status: 500});
  }
}
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log analytics event
    console.log('Analytics Event:', {
      ...body,
      userAgent: request.headers.get('user-agent'),
      ip: request.ip || request.headers.get('x-forwarded-for'),
      timestamp: new Date().toISOString(),
    });

    // Here you would typically send to your analytics service
    // For example: Google Analytics, Mixpanel, Amplitude, etc.
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json({ error: 'Failed to process analytics event' }, { status: 500 });
  }
}